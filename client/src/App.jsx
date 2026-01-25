import React from "react";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>

            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
};

export default App;
