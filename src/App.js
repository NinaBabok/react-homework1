import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./routes/HomePage/HomePage";
import Events from "./routes/EventsPage/EventsPage";
import Event from "./routes/EventPage/EventPage";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Login } from "./routes/Login/Login";
import { Register } from "./routes/Register/Register";
import { Admin } from "./routes/Admin/Admin";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, []);

  function login(authToken, isAdmin) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('isAdmin', isAdmin);
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
  }

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return (
    <>
      <Header isAdmin={isAdmin} isLoggedIn={isLoggedIn} logout={logout} />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/event/:id" component={Event} />
          <ProtectedRoute role='isLoggedIn' isLoggedIn={!isLoggedIn} path="/login" login={login} component={Login} />
          <ProtectedRoute role='isLoggedIn' isLoggedIn={!isLoggedIn} path="/register" login={login} component={Register}/>
          <ProtectedRoute role='isAdmin' isAdmin={isAdmin} path='/admin' component={Admin} />
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
