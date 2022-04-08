import React from "react";
import Landing from "./components/;Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import AboutPage from "./routes/AboutPage/AboutPage";
import Service from "./routes/services/Service";
import SignUp from "./routes/signupPage/signup";
import Favuser from "./register/favuser/favuser";
function App() {
  return (
    <>
      <Router>
        <Landing />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Favuser" element={<Favuser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
