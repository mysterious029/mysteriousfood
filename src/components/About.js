import User from "./User";
import UserClass from "./UserClass";

const About = () => {
return(
    <div className="user-card">
    <h2>About Us :-</h2>
    {/* <User name={"Mukesh Mandal (function)"} /> */}
    <UserClass name={"Mukesh Mandal"} location={"Nagpur"}/>
     <div className="about">
     <p>Welcome to Mysterious Food, where we take pride in offering a delightful culinary experience. Our journey began Year 2023, and since then, we've been on a mission to create memorable moments through the art of food.</p>
      <p>Meet our talented chef whose culinary expertise brings innovation to our kitchen. With a passion for using locally sourced, seasonal ingredients, Chef crafts dishes that reflect a harmonious blend of flavors and textures.</p>
      <p>Rooted in tradition yet embracing creativity, our menu showcases a diverse range of dishes inspired by veg as well as Non-veg . From classic favorites to unique culinary creations, each dish tells a story of dedication and craftsmanship.</p>
      <p>At Mysterious Food, we believe in sustainability and supporting local communities. That's why we partner with local farmers and producers to ensure the freshest and highest quality ingredients in every dish.</p>
      <p>Step into our cozy restaurant, designed to create an inviting ambiance. Whether you're celebrating a special occasion, hosting a gathering, or simply craving a delicious meal, Mysterious Food is the perfect destination.</p>
      <p>Thank you for choosing Mysterious Food. Join us on a culinary journey, where every bite is a celebration of taste and every visit is an opportunity to create cherished memories.</p>
     </div>
    </div>
);
};

export default About;