import "./App.css";
import { Routes, Route } from "react-router";
import MainLayout from "@layout/MainLayout";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import Home from "@pages/Home/Home";
import ProfileLayout from "@layout/ProfileLayout";
import AboutMe from "@sections/AboutMe/AboutMe";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import MyLevel from "@sections/MyLevel/MyLevel";
import NotFoundPage from "@sections/NotFoundPage/NotFoundPage";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<ProfileLayout />}>
                        <Route path="me" element={<AboutMe />} />
                        <Route path="level" element={<MyLevel />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
