import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
        <h1>Oop!!!--</h1>
        <h2>Something Went Wrong!!</h2>
        <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;