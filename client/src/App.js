import React from "react";
// import DeveloperSignUp from "./pages/Developer-Signup/Developer-Signup";
// import EmployerSignUp from "./pages/Employer-Signup/Employer-Signup";
// import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import DeveloperProfile from "./pages/Developer-profile/Developer-profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DeveloperProfile />
    </div>
  );
}

export default App;
