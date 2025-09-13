import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
        {/* Later: add Admin layout here */}
        {/* <Route path="/admin" element={<AdminLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
