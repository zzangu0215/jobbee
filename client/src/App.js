import React from "react";
import Home from "./pages/Home/Home";
// import DeveloperSignUp from "./pages/Developer-Signup/Developer-Signup";
// import EmployerSignUp from "./pages/Employer-Signup/Employer-Signup";
// import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
// import DeveloperProfile from "./pages/Developer-profile/Developer-profile";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
