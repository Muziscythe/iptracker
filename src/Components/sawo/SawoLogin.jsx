import { useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Sawo from "sawo"
// import { useAuth } from "../Context/UserContext";

function SawoLogin(){
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_API_KEY;
  // const {user,setUser} = useAuth();

  // const [user,setUser] = useState(false);
  // const [payload,setPayload] = useState(null);
  useEffect(() => {
    const config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        navigate("/home");
      },
    };
    const sawo = new Sawo(config);
    sawo.showForm();
  }, [API_KEY,navigate]);

  return <div id="sawo-container" style={{height: "300px", width: "400px"}}></div>
}

export default SawoLogin;