import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/landingpage/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router >
      <Home/>
    </Router>
  );
}

export default App;
