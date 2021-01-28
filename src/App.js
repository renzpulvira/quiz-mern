import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

document.body.style.backgroundColor = "#333;";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
