import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomeButton from "./Component/Home";
import Login from "./Component/Login";
import NavBar from "./Component/NavBar";
import Register from "./Component/Register";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="section">
        <Switch>
          <Route exact path="/" component={HomeButton}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
