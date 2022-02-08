import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import Sawo from "sawo"
import { useAuth } from "../Context/UserContext";

function SawoLogin(){
  const navigate = useNavigate();
  const API_KEY = "6829d731-66b8-417a-8826-87848a0e60b5";
  const {payload,setPayload} = useAuth();

  const [loading,setLoading] = useState(false);
  // const [payload,setPayload] = useState(null);
  useEffect(() => {
    const config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        setPayload(payload)
      },
    };
    const sawo = new Sawo(config);
    sawo.showForm();
  }, [API_KEY,navigate]);

  const handleClick = () => {
    setLoading(true);
    console.log(payload);
    navigate("/home");
  };

  return (<div className="sawoWrapper">
  <div
    id="sawo-container"
    style={{ height: "300px", width: "400px" }}
  ></div>
  {payload && (
    <div>
      {!loading && (
        <button className="routeHome" onClick={handleClick}>
          To Home
        </button>
      )}
    </div>
  )}
</div>);
}

export default SawoLogin;