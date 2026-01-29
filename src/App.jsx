import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <HomePage />;
      <AboutUs />;
      <Product />;
    </>
  );
}

export default App;
