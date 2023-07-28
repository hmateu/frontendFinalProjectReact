import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { About } from "../About/About";
import { Attractions } from "../Attractions/Attractions";
import { AttractionDetail } from "../Attractions/Attraction-detail/Attraction-detail";
import { Profile } from "../Users/Profile/Profile";
import { Users } from "../Users/Users";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Tickets } from "../Tickets/Tickets";
import { MyTickets } from "../Tickets/MyTickets/MyTickets";

export const Body = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to='/' />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attraction-detail/:id" element={<AttractionDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/users" element={<Users />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets-me" element={<MyTickets />} />
        </Routes>
    );
}