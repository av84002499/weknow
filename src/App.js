import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/pages/Login";
import { Registration } from "./component/pages/Registration";

export const App = () => {
  return (
    <div>
      

      <Routes>
        <Route key="Login" path="/login" element={<Login />} />
        <Route key="Registration" path="/" element={<Registration />} />
        <Route key="registration" path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};
