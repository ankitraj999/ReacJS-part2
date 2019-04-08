import React, {Component } from 'react';

import './App.css';
import Welcom from './components/welcom';
import Functionaldemo from './components/functinalcomponentdemo'
import Greeting from './components/D2greeting';
//import CreateComponent from './components/usingCreatecomponent'
import Greetclass from './components/D2Greet'
import NumListComp from './components/D2numlist'
import EventDemo1 from './components/D2event'
import StateDemo1 from './components/statedemo'
import Home from './components/Home'
import About from './components/About'
import Forms from './components/Forms'
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
//import {Router} from 'react-router'
import {Header} from './components/header'
import FormDemo from './components/FormDemo'
import RefsDemo1 from './components/refdemo'
import Addlist from './components/addlist'
import LifecycleA from './components/lifecycleA'

class App extends Component {
  render() {
    let numberarray = [2, 3, 5, 7, 1]
    let details = [{
      name: 'Ankit Raj',
      hobbies: ["listening music", "dancing", "basketball", "reading"]
    }]
    return (

      <div className='container'>
        {/* ---------------------first Day of react------------------------------- */}
        {/* <h1>Hello Ankit Raj</h1>
        <h1>You are  awesome Ankit Raj</h1> */}
        {/* <Welcom />
        <Functionaldemo/>  */}

        {/* using react create Element */}
        {/* const e = React.createElement;

        ReactDOM.render(
        e('div', null, 'Hello World'),
       document.getElementById('root')
); */}

        {/* -------------------second day of react---------------------------------------------------- */}
        {/*       
      <Greeting name="ankit"/>
      <Greeting name="Raj"/>
      <Greeting name="araj"/>
      <Greetclass name="awesome"/>
      <Greetclass name="raj"/>
      <NumListComp number={numberarray} name1={details}/>
      <EventDemo1 age={32}/>
      {/* <StateDemo1 message="wecome ankit"></StateDemo1> */}
        {/* <StateDemo1 message={0}></StateDemo1> */} 
{     /* ------------------------------------------------------------------------------------------- */}
        {/* <BrowserRouter>
          <div className='row'>
            <div className='col-xs-12'>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <Switch>
                <Route exact path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter> */}

    {/* ------------------------------------------------------------------------------------------- */} 
 <Router>
 <div>
 <Header/>

 <div className="container">

 <Switch>

 <Route exact path="/" component={Home}/>

<Route exact path="/about" component={About}/>
<Route exact path="/forms" component={Forms}/>
<Route exact path="/formdemo" component={FormDemo}/>
<Route exact path="/refdemo" component={RefsDemo1}/>
<Route exact path="/addInlist" component={Addlist}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/lifecycle" component={LifecycleA}/>


 </Switch>

 </div>

 </div>

</Router> 



</div>


    );
  }
}

export default App;
