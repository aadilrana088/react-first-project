import React,{useState} from 'react'
function NewUser() {
    function createUser() {
        let data = {name,age,address}
        console.log("data ", data )
    }
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [address,SetAddress] = useState("")
    return (
        <div>
            <h1>New User Created</h1>
            <input type="text" name="username" onChange = {(e)=> setName(e.target.value)} value = {name} />
            <br/><br/>
            <input type="text" name="age" onChange = {(e)=> setAge(e.target.value)} value = {age} />
            <br/><br/>
            <input type="text" name="address" onChange = {(e)=> SetAddress(e.target.value)} value = {address} />
            <br/><br/>
            <button onClick={createUser}>Create user</button>
        </div>
    )
}
export default NewUser