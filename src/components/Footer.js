import { redirect } from "react-router-dom";

const Footer = () => {
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/mukeshkrmandal/" target="_blank">
          Mukesh Mandal
        </a>
        <h4 style={{color:"HighlightText"}}>Delivery Boy- Raj</h4>
        <h5>you get the food in just 45 min by Delivery Boy</h5>
        <i className="fa-solid fa-copyright"></i>2023
        <strong>
          Mysterious<span>Food</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;