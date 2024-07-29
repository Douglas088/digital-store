import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListingPage from "../Pages/ProductListingPage";
import PageLayout from "../Layouts/PageLayout";
import Notfound from "../Pages/Notfound";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout/>}>

            <Route index element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage/>} />

          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
