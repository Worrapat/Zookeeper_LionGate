import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const HomePage = lazy(() => import("./Pages/Homepage"));
const TigerPage = lazy(() => import("./Pages/TigerPages"));
// const TigerPage = lazy(() => import("./Pages/TigerPages"));
// const TigerPage = lazy(() => import("./Pages/TigerPages"));

export default function WebRoutes() {
    return (
        <Routes>
            <Route path="" element={<LoginPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="tiger" element={<TigerPage />} />
        </Routes>
    );
}
