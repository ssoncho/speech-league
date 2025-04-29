import "./App.css";
import { Routes, Route } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login/Login";
import Register from "@pages/Register/Register";
import Home from "./pages/Home/Home";
function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
