import axios from "axios";
import { Navigate,useNavigate, Outlet } from "react-router-dom";

const ConfigureAxios = () => {

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    //axios.defaults.baseURL = "http://192.168.61.40:3000/tms/api/v1";
    axios.defaults.baseURL = "https://localhost:5000/api";

    let token = localStorage.getItem("token");

    if(token){
        setAuthToken(token);
    }else{
        localStorage.clear();
        return <Navigate to="/" replace />
    }
};

export const getCookie=(cname)=>{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(token);
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};

export default ConfigureAxios;
