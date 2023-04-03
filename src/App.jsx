import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/footer/footer";
import Home from "./Components/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/about";
import Contact from "./Components/contact/contact.jsx";
import Ourpartners from "./Components/ourpartners/ourpartners";
function App() {
  return (
    <>
      <Header title="Muscle Fitness" searchbar={false} />
      <Home />
      <About />
      <Contact />
      <Ourpartners/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </>
  );
}

export default App;
