
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  const splash = require('./splash.png')

  return (
    <div className="App">
    <Header />
    <img src={splash} alt="Splash" />
    <Welcome />
    <Login />
    </div>
  );
}

export default App;
