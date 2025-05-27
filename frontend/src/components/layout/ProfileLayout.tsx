import ProfileHeader from "@shared/ProfileHeader/ProfileHeader";
import Footer from "@shared/Footer/Footer";
import Navbar from "@shared/Navbar/Navbar";
import s from "./ProfileLayout.module.css";
import { Outlet } from "react-router";
import ScrollContainer from "@ui/ScrollContainer";

const ProfileLayout = () => {
    return (
        <ScrollContainer className="flex scrollbar">
            <ProfileHeader />
            <main className={`flex ${s.main}`}>
                <Navbar />
                <Outlet />
            </main>
            <Footer />
        </ScrollContainer>
    );
};

export default ProfileLayout;
