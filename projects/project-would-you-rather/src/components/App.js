import { BrowserRouter as Router,Route } from 'react-router-dom'
import Nav from './Nav'
import PollDetails from './PollDetails';
import NewPoll from './NewPoll';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import Login from './Login';

function App() {
  return (
    <Router>
      
      <div className="container">
          Would you rather App
          <Nav />
      </div>
      <div>
          <Route path='/' exact component={Home} />
          <Route path='/poll/:id' component={PollDetails} />
          <Route path='/new' component={NewPoll} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/login' component={Login} />
        </div>
    </Router>
  );
}

export default App;
