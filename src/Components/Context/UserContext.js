import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export function useAuth(){
  return useContext(AuthContext);
}

export const AuthProvider = (props) =>{
  const [ipDetail,setIpDetail] = useState(null);
  const[lat,setLat] = useState(null);
  const[lon,setLon] = useState(null);
  // const [payload,setPayload] = useState(null);
  // function userPayload(payload){
  //   return setUser(payload);
  // }
  const value = {
    ipDetail,
    setIpDetail,
    lat,
    lon,
    setLat,
    setLon
  }
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}