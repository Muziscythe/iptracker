import { StyledHeader, StyledInput } from "../Styles/StyledHeader.styled";
import bgImg from "../../images/pattern-bg.png";
import iconArrow from "../../images/icon-arrow.svg";
import { CardBody, CardTitle, InfoCard, InfoContainer } from "../Styles/InfoContainer.styled";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/UserContext";

function Header(){

  const {ipDetail,setIpDetail,setLat,setLon,payload} = useAuth();
  const [ip,setIp] = useState("");
  const ipify_API = "at_PcuYMNw7UW0ubb2IUEbKHX05I9hbs";

  useEffect(()=>{
    console.log(ipDetail?.location);
    setLat(ipDetail?.location?.lat);
    setLon(ipDetail?.location?.lng);
  },[ipDetail,setLat,setLon])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipify_API}&ipAddress=${ip}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  setIpDetail(data)
  // console.log(ipDetail);
}
  );
  }
//   country: "US"
// region: "California"
// city: "Mountain View"
// lat: 37.38605
// lng: -122.08385
// postalCode: "94035"
// timezone: "-08:00"
// geonameId: 5375480

  return <StyledHeader img={bgImg}>
      <h2><span>Welcome: </span>{payload? payload.identifier : "IP Address Tracker"}</h2>
      <StyledInput onSubmit={handleSubmit}>
        <input placeholder="Search for any IP address or domain" onChange={(e)=>setIp(e.target.value)} value={ip}/>
        <button type="submit"><img src={iconArrow} alt=""/></button>
      </StyledInput>
      <InfoContainer>
        <InfoCard>
          <CardTitle>IP ADDRESS</CardTitle>
        <CardBody>{ipDetail ? ipDetail.ip : "0.0.0.0"}</CardBody>
        </InfoCard>
        <InfoCard active="1px solid lightgray">
          <CardTitle>LOCATION</CardTitle>
        <CardBody>{ipDetail ? `${ipDetail.location.region}, ${ipDetail.location.country}, ${ipDetail.location.postalCode}` : "X,Y,Z"}</CardBody>
        </InfoCard>
        <InfoCard active="1px solid lightgray">
          <CardTitle>TIME ZONE</CardTitle>
        <CardBody>{ipDetail ? `UTC ${ipDetail.location.timezone}` : "UTC 0:00"}</CardBody>
        </InfoCard>
        <InfoCard active="1px solid lightgray">
          <CardTitle>ISP</CardTitle>
        <CardBody>{ipDetail ? ipDetail.isp : "SpaceX"}</CardBody>
        </InfoCard>
      </InfoContainer>
    </StyledHeader>
  
}

export default Header;