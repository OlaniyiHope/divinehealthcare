import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import LoginPage from "./pages/LoginPage";
// import Blog from "./pages/Blog";
// import Sidebar from "./Sidebar";
// import BlogDet from "./pages/BlogDet";
// import Banner from "./pages/Banner";
// import Det from "./pages/Det";
// import News from "./pages/News";
// import NewsDet from "./pages/NewsDet";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import Posagent from "./pages/Posagent";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Arthritis from "./pages/Arthritis";
import Ulcer from "./pages/Ulcer";
import Diabetes from "./pages/Diabetes";
import Fertility from "./pages/Fertility";
import Hiv from "./pages/Hiv";
import Fibroid from "./pages/Fibroid";
import Hbp from "./pages/Hbp";
import PageTitleSetter from "./pages/PageTitleSetter";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <PageTitleSetter />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <PageTitleSetter />
                <About />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <PageTitleSetter />
                <Login />
              </>
            }
          />
          <Route
            exact
            path="/services"
            element={
              <>
                <PageTitleSetter />
                <Services />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <PageTitleSetter />
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/blog"
            element={
              <>
                <PageTitleSetter />
                <Blog />
              </>
            }
          />
          <Route
            exact
            path="/shop"
            element={
              <>
                <PageTitleSetter />
                <Shop />
              </>
            }
          />
          <Route
            exact
            path="/shop-details"
            element={
              <>
                <PageTitleSetter />
                <ShopDetail />
              </>
            }
          />
          <Route
            exact
            path="/product/arthritis-and-stroke"
            element={
              <>
                <PageTitleSetter />
                <Arthritis />
              </>
            }
          />
          <Route
            exact
            path="/faq"
            element={
              <>
                <PageTitleSetter />
                <Faq />
              </>
            }
          />
          <Route
            exact
            path="/product/ulcer"
            element={
              <>
                <PageTitleSetter />
                <Ulcer />
              </>
            }
          />
          <Route
            exact
            path="/product/diabetes"
            element={
              <>
                <PageTitleSetter />
                <Diabetes />
              </>
            }
          />
          <Route
            exact
            path="/product/erectile-dysfunction"
            element={
              <>
                <PageTitleSetter />
                <Fertility />
              </>
            }
          />
          <Route
            exact
            path="/pos-agent"
            element={
              <>
                <PageTitleSetter />
                <Posagent />
              </>
            }
          />
          <Route
            exact
            path="/product/hiv-cancer-hepatitis"
            element={
              <>
                <PageTitleSetter />
                <Hiv />
              </>
            }
          />
          <Route
            exact
            path="/product/fibroid"
            element={
              <>
                <PageTitleSetter />
                <Fibroid />
              </>
            }
          />
          <Route
            exact
            path="/product/Hbp"
            element={
              <>
                <PageTitleSetter />
                <Hbp />
              </>
            }
          />
          <Route
            exact
            path="/pricing"
            element={
              <>
                <PageTitleSetter />
                <Pricing />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
