import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Switch,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Home}/>
    </Switch>
    </div>
  );
}

export default App;
