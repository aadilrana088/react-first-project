// import React from 'react'
// class PropComponent extends React.Component {
//     constructor() {
//         super()
//     }
//     componentDidMount() {
//         console.warn("before update",this.props)
//     }
//     componentDidUpdate() {
//         console.warn("after update",this.props);
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Prop Component</h1>
//                 <h2>name: {this.props.name}</h2>
//             </div>
//         )
//     }
// }
import React,{ useEffect } from "react";
function PropComponent(props) {
    useEffect(()=>{
        console.log("before Update",props.name)
    })
    useEffect(()=>{
        console.log("after Update",props.name)
    },[props.name])
    return (
        <div>
            <h1>Props Component</h1>
            <h2>Name: {props.name}</h2>
        </div>
    )
}

export default PropComponent;