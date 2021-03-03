import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Footer from './components/Footer'
import Home from "./components/Home.jsx";
import DetailPerson from "./components/DetailPerson.jsx"
import './App.scss'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/detailPerson/:id" component={DetailPerson} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
