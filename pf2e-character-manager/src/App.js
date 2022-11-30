import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import Login from "./Components/Pages/Login/Login";
import SelectCharacter from "./Components/Pages/SelectCharacter/SelectCharacter";

const App = () => {
  return (
    <Router>
      <div className="container">
        <SelectCharacter />
      </div>
    </Router>
  );
};

export default App;
