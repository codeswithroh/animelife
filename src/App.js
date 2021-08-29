import "./App.css";
import Hero from "../src/components/Hero";
import About from "./components/About";
import AnimatedCursor from "react-animated-cursor";
import Feedback from "./components/Feedback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={22}
        outerSize={22}
        color="240, 54, 88"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Router>
        <Switch>
          <Route path="/animelife" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
