import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./routes/HomePage/HomePage";
import Events from "./routes/EventsPage/EventsPage";
import Event from "./routes/EventPage/EventPage";

import styled from "styled-components";
import { Route, Switch } from "react-router";

function App() {

  return (
    <>
      <Header />

      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event/:id" component={Event} />
        </Switch>
      </Main>

      <Footer />
    </>
  );
}

export default App;

const Main = styled.main`
  flex: 1 0 auto;
`;
