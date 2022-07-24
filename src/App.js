import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'App Component';
  // const likes = 50;
  // const link = "https://www.google.co.in"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>Avg: { Math.random() * likes }</p>
        <a href={link}>Google Home page</a> */}
      </div>
    </div>
  ); 
}

export default App;
