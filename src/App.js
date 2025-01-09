import "./App.css";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import Packagecontent from "./pages/packagecontent";
import BookPage from "./pages/bookPage";

import Register from "./pages/Sign_in/Register";
import SelectPackage from "./pages/Packages/SelectPackage";
import PackageContent2 from "./pages/Packages/PackageContent";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";

function App() {                                                                                                  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/package/:packageName" element={<PackageContent2/>} />
      <Route path="/bookNow" element={<BookPage/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/SelectPackage" element={<SelectPackage/>}/>
      <Route path="/ContactPage" element={<Contact/>}/>
      <Route path="/Events" element={<Events/>}/>
    </Routes>
  );
}

export default App;
