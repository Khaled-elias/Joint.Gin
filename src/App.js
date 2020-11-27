
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Contact from './components/Contact';
import Shop from './components/Shop';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import Entertainment from './components/Entertainment';
import EvenT from './components/Event';

function App() {
  return (
    
    <Router>
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/event" component={EvenT} />
      </Switch>
      
      <Footer1 />
      <Footer2 />
      

    </Router>
  );
}

export default App;
