import { useState } from "react";

const User =(props) =>{
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location: Nagpur</h3>
            <h4>College:IIIT Nagpur</h4>
        </div>
    );
};

export default User;