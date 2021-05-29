import React from 'react'
class About extends React.Component {
    constructor() {
        super();
        this.state = {
            name : "Aadil",
            age: 23
        }

    }
    componentDidMount() {
        console.log("did mount");
    }
    componentDidUpdate() {
        alert("name updated")
    }
    render() {
        console.log("render method")
        return(
            <div>
                <h1>About us Page Class Component</h1>
                <h2>
                    Name is {this.state.name}
                </h2>
                <button onClick = {()=> {this.setState({name: "Aadil Rana"})}}>Upate Name</button>
            </div>
        )
    } 
}
export default About;