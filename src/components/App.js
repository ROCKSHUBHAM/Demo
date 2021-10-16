import React from 'react';
import Navbar from './navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contant from './Contant';
import Adminlogin from './Adminlogin';
import Axiosproduct from './Rest';
function App() {
  return (
    <>

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contant" component={Contant}></Route>
          <Route exact path="/admin" component={Adminlogin}></Route>
          <Route exact path="/product" component={Axiosproduct}></Route>
        </Switch>
    

    </>
  );
}

export default App;
