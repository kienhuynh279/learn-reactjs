// import './App.css';

import { useState } from "react";
import BetterClockFeature from "./features/BetterClock";
import ClockFeature from "./features/Clock";
import PostListFeature from "./features/PostList";

function App() {
  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      <h1>
        React Hooks
      </h1>
      <PostListFeature></PostListFeature>
      {showClock && <ClockFeature></ClockFeature>}
      
      <BetterClockFeature></BetterClockFeature>
      <button onClick={() => {setShowClock(false)}}>Hide Clock</button>
    </div>
  );
}

export default App;
