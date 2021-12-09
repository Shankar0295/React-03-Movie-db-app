import Home from './components/Home/Home';
import MovieInfo from './components/MovieInfo/MovieInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/:id" component={MovieInfo}></Route>
      </Switch>
    </Router>
  )
}

export default App;
