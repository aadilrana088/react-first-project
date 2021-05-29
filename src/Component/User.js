// import React from 'react'
// function User() {
//     let user = [
//         {name: "Aadil",age: '22', address: "noida" },
//         {name: "Shoiab",age: '23' },
//         {name: "asif",age: '25' },
//         {name: "Arif",age: '27' }
//     ]
//     return(
//         <div>
//             <h1>Here we will use listing</h1>
//             {
//                 user.map((item,i)=>
//                     <div key = {i}>
//                         <span>{item.name}</span>&nbsp;&nbsp;
//                         <span>{item.age}</span>&nbsp;&nbsp;
//                         <span>{item.address}</span>&nbsp;&nbsp;
//                     </div>
//                 )
//             }
//         </div>
//     )
    
// }
// export default User

import React,{Fragment, useState} from 'react'
import {Table} from 'react-bootstrap'
function User() {
    let [user, setUser] = useState(
        [
            {name: "Aadil",age: 20,address: "Delhi"},
            {name: "shoiab",age: 20, address: "Kandhla"},
            {name: "Asif",age: 22}
        ]
    )
    return(
        <Fragment><h1>Here is listing</h1>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
      <th>Adrress</th>
    </tr>
  </thead>
  <tbody>
      {
          user.map((item,i)=> 
            <>
                <tr key= {i}>
      <td>{i}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.address}</td>
    </tr>
            </>
          )
      }
    
  </tbody>
</Table>
        {
            user.length===2?<h2>This is correct</h2>:<h2>This is not correct</h2>
        }

{/* {
            user.map((item,i)=> 
                <div key={i}>
                    {item.name},{item.age}
                </div>
            )
        } */}
        </Fragment>
        
    )
}
export default User;