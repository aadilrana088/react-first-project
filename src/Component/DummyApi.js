import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
function DummyApi() {
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums").then((data)=> {
            data.json().then(result=> {
                console.log("Results", result);
                setUser(result)
            })
        })
    },[])
    return (
        <div>
            <h1>Dummy Api Data</h1>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    </tr>
                </thead>
                <tbody>
                {
                            user.map((item,i)=> 
                                <tr key = {i}>
                                <td>{i}</td>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                </tr>
                            )   
                        }
                    
                </tbody>
                </Table>
        </div>

    )
}
export default DummyApi;