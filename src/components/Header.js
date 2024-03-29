import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

import {Link} from "react-router-dom";

import useOnlineStatus from "./useOnlineStatus"

const Header = () => {

    const status = useOnlineStatus();

    const [loginBtn, setLogin] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Online Status : {status ? "🟢" : "🔴"}</li>
                    <li><Link to="/About">About us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={() => {
                       loginBtn==="Login"?setLogin("Logout"):setLogin("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;