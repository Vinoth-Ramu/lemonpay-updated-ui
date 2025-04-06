import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";// import HeaderComponent from "./components/Header/header";
import AdminLogin from "./components/Login/adminlogin";
import RegisterScreen from "./components/SignUp/signup";
import TaskManagement from "./components/Task/task";




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />
            <Route index path="/register" element={<RegisterScreen />} />
            <Route path="/task" element={<TaskManagement />} />
        </Routes>
        
      </BrowserRouter> */}
          <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/task" element={<TaskManagement />} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;




