import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import myIcon from "../../images/icon-location.svg";
import L from "leaflet";
import { useAuth } from '../Context/UserContext';

function Map(){

  // const map = L.map('map');

  const {lat,lon} = useAuth();
  

  const locIcon = new L.Icon({
    iconUrl: myIcon,
    iconRetinaUrl: myIcon,
    popupAnchor: [-0,-0],
    iconSize: [32,45]
  });
  console.log(lat,lon);
  
  
  return <>
  {lon && 
    <MapContainer center={[lat, lon]} zoom={13} style={{width:'100vw',height:'100vh'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lon]} icon={locIcon}/>
  {/* {map.setView(new L.LatLng(40.737, -73.923), 8)} */}
  </MapContainer> }
  </>
}

export default Map;