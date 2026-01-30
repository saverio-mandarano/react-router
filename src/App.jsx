//imort tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import le varie pagine da usare nelle rotte
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";

//import del layout di riferimento
import DefaultLayout from "./components/layouts/DefaultLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/prodotti">
              <Route index element={<Product />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/chisiamo" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
