import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
 
    const [btnNameReact,setBtnNameReact] = useState("Login");

// if no depandency arry => useEfffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial render(just one)
//if dependency array is [btnNameReact] => useEffect called everytime btnName is updated
  useEffect(() => {
    console.log("useeffect called");
  },[btnNameReact]);

    return(
        <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                <div className="nav-items">
                    <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About Us</Link></li>
                    <li><Link className="link" to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login"
                        ?setBtnNameReact("Logout")
                        :setBtnNameReact("Login");
                    }}
                     >
                        {btnNameReact}</button>
                    </ul>
                </div>
            </div>
        
    );
};

export default Header;