import Features from "./components/features/Features";
import Made from "./components/made/Made";
import Main from "./components/main-section/Main";
import Navbar from "./components/navbar/Navbar";
import Office from "./components/office/Office";
import Start from "./components/starter/Start";

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Start/>
    <Features/>
    <Office/>
    <Made/>
    </>
  );
}

export default App;