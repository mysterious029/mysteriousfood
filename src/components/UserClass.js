 import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // this.state ={
        //     count:0,
        // }

        console.log(props);
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mysterious029");
        const json = await data.json();
        console.log(json);
    }



    render(){
        const {name ,location} =this.props;
        // const {count}=this.state;
        return(
            <div className="user-card">
            {/* <h1>count:{count}</h1>
            <button 
            onClick={() => {
                this.setState({
                    count:this.state.count + 1,
                });
            }}>Count Increase</button>
              <button 
            onClick={() => {
                this.setState({
                    count:this.state.count - 1,
                });
            }}>Count Decrease</button> */}
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>College:IIIT Nagpur</h4>
        </div>
        );
    }
};

export default UserClass;