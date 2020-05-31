import React from 'react';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/home';
import MainScreen from './screens/MainScreen/main';
// import logo from './logo.svg';



function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Pages</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/main">Main</Nav.Link>
        </Nav>
      </Navbar>

      <div className="App">
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/main' component={MainScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
