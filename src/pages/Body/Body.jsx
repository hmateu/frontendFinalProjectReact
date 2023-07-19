import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login.jsx/Login";

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to='/' />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}