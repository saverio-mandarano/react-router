//imort tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import le varie pagine da usare nelle rotte
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Product from "./components/pages/Product";

//import del layout di riferimento
import DefaultLayout from "./components/layouts/DefaultLayouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/prodotti" element={<Product />} />
            <Route path="/chisiamo" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
