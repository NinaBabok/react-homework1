import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {

  return (
    <Router>
      <Header />

      <main>
        <Routes />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
