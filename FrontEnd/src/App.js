import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
