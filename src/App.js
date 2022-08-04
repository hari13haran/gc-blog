import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'App Component';
  // const likes = 50;
  // const link = "https://www.google.co.in"
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>Avg: { Math.random() * likes }</p>
        <a href={link}>Google Home page</a> */}
        </div>
      </div>
    </Router>

  ); 
}

export default App;
