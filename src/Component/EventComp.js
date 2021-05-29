import React,{useState} from 'react'
// function abc() {
//     console.log("button Clicked")
// }
// function EventComp() {
//     return(
//         <div>
//             <h1>Event Function</h1>
//             {/* <button onClick = {()=>{console.log("button Clicked")}}>Onclick</button> */}
//             <button onClick = {abc}>Onclick</button>
//         </div>
//     ) 
// }
function EventComp() {
    let [val, setVal] = useState("Aadil")
    const test = (e)=> {
        console.log(e.target.value);
        setVal(e.target.val)
    }
    return(
        <div>
            <h1>Event with input Field</h1>
            <input type="text" value= {val} onChange = {test}/>
            <button onClick = {()=> alert(val)}>click me</button>
        </div>
    )
}
export default EventComp;