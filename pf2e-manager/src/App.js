

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  

  return (      
    <div className="App">    
    <Header />    
    <Welcome />   
    <Login  />
    </div>
  );
}

export default App;
