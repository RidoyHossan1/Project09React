import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import React from "react";
import Footer from "./components/Footer/Footer.jsx";
import Alert from "./Alert.jsx";

function App() {
  const [mode, setMode] = useState("light");
  const [modeBlue, setModeBlue] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#264653";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Header mode={mode} toggleMode={toggle} />
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<Home mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode}/>} />
        <Route path="/contact" element={<Contact mode={mode}/>} />
      </Routes>

      <Footer mode={mode} />
    </>
  );
}

export default App;
