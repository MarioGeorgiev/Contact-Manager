import { Link } from "react-router-dom";
import * as api from "../../services/api"
import { useAuthContext } from "../../contexts/AuthContext";
export default function Nav(){
  const { setAuthToken } = useAuthContext();

  const onLogoutHandler = async(e)=>{
    const result = await api.logout();
    setAuthToken(false)

  }
    return(<div className="container d-flex align-items-center justify-content-between">
    <div className="logo">      
    </div>
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link className="nav-link scrollto " to={'/companies'}>Home</Link></li>
        <li><Link className="nav-link scrollto " to={'/register'}>Register</Link></li>
        <li><Link className="nav-link scrollto " to={'/'} onClick={(e)=>onLogoutHandler(e)}>logout</Link></li>
       
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  </div>)
}