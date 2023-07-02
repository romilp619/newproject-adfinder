//import logo from "../assest/images/logo.png";
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(<>
        <div>
            <div>
                <div className="header_bg">
                        <div className="navbar navbar-expand-lg navbar-light bg-light">
                        
                            <div  className="fw-bold" >
                                <NavLink className="logo" to="/">
                                    AdFinder
                                     {/* <img src={logo}/>  */}
                                </NavLink>
                            </div>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/Createpost">Create a Posting
                                            </NavLink>
                                            <ul>
                                        </ul>          
                                    </li>

                                    
                        
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login" >
                                         Log In 
                                        </NavLink>
                                    </li> 
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/Signup">
                                         Register
                                        </NavLink>
                                    </li> 
                                   

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>);
}
export default Header;
