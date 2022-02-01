import { Switch, Route } from "react-router-dom";
import "./App.css";

import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Switch>

      <Route exact path="/:id*" component={Profile} />
    </Switch>
  );
}

export default App;
