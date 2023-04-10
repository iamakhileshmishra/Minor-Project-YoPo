import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Protected from "./PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={<Protected Component={Dashboard} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Protected Component={Yoga} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
