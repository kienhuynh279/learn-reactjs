// import { useState } from "react";
// import BetterClockFeature from "./features/BetterClock";
// import ClockFeature from "./features/Clock";
// import PostListFeature from "./features/PostList";

import MagicBoxFeature from "./features/MagicBox";

function App() {
  // const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      <h1>
        React Hooks
      </h1>

      
      {/* <PostListFeature></PostListFeature>
      {showClock && <ClockFeature></ClockFeature>}
      
      <BetterClockFeature></BetterClockFeature>
      <button onClick={() => {setShowClock(false)}}>Hide Clock</button> */}

      <MagicBoxFeature></MagicBoxFeature>
    </div>
  );
}

export default App;
