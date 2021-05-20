import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./routes/HomePage/HomePage";
import Events from "./routes/EventsPage/EventsPage";
import Event from "./routes/EventPage/EventPage";

import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import { Login } from "./routes/Login/Login";
import { Register } from "./routes/Register/Register";
import { Admin } from "./routes/Admin/Admin";
import { useContext, useEffect } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { setIsLoggedIn, setIsAdmin } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, [setIsLoggedIn, setIsAdmin]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/event/:id' component={Event} />
          <ProtectedRoute role='isAnonymous' path='/login' component={Login} />
          <ProtectedRoute role='isAnonymous' path='/register' component={Register}/>
          <ProtectedRoute role='isAdmin' path='/admin' component={Admin} />
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
