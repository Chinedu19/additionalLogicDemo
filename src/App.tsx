import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BgImage from "./assets/images/bg-Image.png";
import Stock from "./assets/images/stock.png";
import Graph from "./assets/images/graph.png";
import Person from "./assets/images/person.png";
import Person2 from "./assets/images/person2.png";
import Person3 from "./assets/images/person3.png";
import Person4 from "./assets/images/person4.png";
import Home from "./pages/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Terms from "./pages/Terms";
import SignIn from "./pages/SignIn";
export const imgArr = [Person, Person2, Person3, Person4];
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
