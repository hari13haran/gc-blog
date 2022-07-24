import './App.css';

function App() {
  const title = 'Welcome to my new Blog!';
  const likes = 50;
  const link = "https://www.google.co.in"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>Avg: { Math.random() * likes }</p>
        <a href="link">Google Home page</a>
      </div>
    </div>
  );
}

export default App;
