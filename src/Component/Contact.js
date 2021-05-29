import React,{useEffect,useState} from 'react'
// function Contact() {
//     let name = "contact page function component"
//     return (
//         <h1>{name}</h1>
//     )
// }
function Contact() {
    let [name,setName] = useState("Aadil")
    let [age,setAge] = useState(20)
    useEffect(()=>{
        console.log("useeffect from hook")
    },[age]);
    return (
        <div>
            <h1>Aadil Rana</h1>
            <h2>name: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick = {()=>{setName("Aadil Rana")}}>Update Name</button>
            <button onClick = {()=>{setAge(30)}}>Update Age</button>
        </div>
    )
}
export default Contact;