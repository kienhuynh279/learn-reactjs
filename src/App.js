import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import TodoFeature from "./features/Todo";
import SongFeature from "./features/Song";
import BetterClockFeature from "./features/BetterClock";
import PostListFeature from "./features/PostList";
import MagicBoxFeature from "./features/MagicBox";
import NotFound from "./components/NotFound";
import "./App.css";
import { useEffect } from "react";
import productsApi from "./api/productApi";

function App() {
  useEffect(() => {
    
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      
      const productList = await productsApi.getAll(params)
      console.log(productList);
    }

    fetchProducts();
  }, [])

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
        <Redirect from="/home" to="/"></Redirect>

        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/songs" component={SongFeature}></Route>
        <Route path="/clock" component={BetterClockFeature}></Route>
        <Route path="/posts" component={PostListFeature}></Route>
        <Route path="/magic-box" component={MagicBoxFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
