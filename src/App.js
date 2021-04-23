import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./routes/Routes";

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes />
      </main>

      <Footer />
    </>
  );
}

export default App;
