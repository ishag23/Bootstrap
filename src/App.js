import "./App.css";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecord from "./components/AddRecord";
import Layout from "./components/Layout";
import LoginReg from "./components/auth/LoginReg";
import ResetPassword from "./components/auth/ResetPassword";
import SendPasswordResetEmail from "./components/auth/SendPasswordResetEmail";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/AddRecord" element={<AddRecord />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;