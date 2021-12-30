// import { useState } from "react";
// import BetterClockFeature from "./features/BetterClock";
// import ClockFeature from "./features/Clock";
// import PostListFeature from "./features/PostList";

import { NavLink, Route, Switch } from "react-router-dom";
import TodoFeature from "./features/Todo";
import SongFeature from "./features/Song";
import BetterClockFeature from "./features/BetterClock";
import PostListFeature from "./features/PostList";
import MagicBoxFeature from "./features/MagicBox";
import "./App.css";

function App() {
  // const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      <div>
        <p>
          <NavLink to="/todos">Todo</NavLink>
        </p>
        <p>
          <NavLink to="/songs">Songs</NavLink>
        </p>
        <p>
          <NavLink to="/clock">Clock</NavLink>
        </p>
        <p>
          <NavLink to="/posts">Posts</NavLink>
        </p>
        <p>
          <NavLink to="/magic-box">Magic Box</NavLink>
        </p>
      </div>
      <Switch>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/songs" component={SongFeature}></Route>
        <Route path="/clock" component={BetterClockFeature}></Route>
        <Route path="/posts" component={PostListFeature}></Route>
        <Route path="/magic-box" component={MagicBoxFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
