import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Event from "./pages/Event/Event";

function App() {

  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/event/:titleEvent">
            <Event />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
