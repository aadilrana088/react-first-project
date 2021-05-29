import React,{useState} from 'react'
import './App.css';
import About from './Component/About'
import Contact from './Component/Contact'
import EventComp from './Component/EventComp';
import NewUser from './Component/NewUser';
import PropComponent from './Component/PropComponent'
import User from './Component/User'
import Home from './Component/Home'
import DummyApi from './Component/DummyApi'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  // let [name,setName] = useState("Rana")
  return (
    <Router>
      <div className="App">
      <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#!"><Link to="/">Home</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/about">About</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/user">Users</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/contact">Contact</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/lists">Lists</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/event">Events</Link></Nav.Link>
        <Nav.Link href="#!"><Link to="/api">DummyApi</Link></Nav.Link>
      </Nav>
    </Navbar>

    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/lists">
            <NewUser/>
          </Route>
          <Route path="/event">
            <EventComp/>
          </Route>
          <Route path="/api">
            <DummyApi/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      {/* <h1>Home page </h1> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <PropComponent name={name}/> */}
      {/* <button onClick = {()=>{setName("Aadil Rana")}}>Update Name</button> */}
      {/* <EventComp /> */}
      {/* <User /> */}
      {/* <NewUser /> */}
    </div>
    </Router>
  );
}

export default App;
