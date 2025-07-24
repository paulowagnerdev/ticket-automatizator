import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Users from "./assets/components/Users/Users.jsx";
import AddProfile from "./assets/components/Profiles/Profiles.jsx";
import AccessComponent from "./assets/components/Access/AccessComponent.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<AddProfile/>} />
      <Route path="/access" element={<AccessComponent/>} />
    </Routes>
  </BrowserRouter>
);
