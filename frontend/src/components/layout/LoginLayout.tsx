import { Outlet } from "react-router";

import Header from "@shared/Header/Header";
import Container from "@ui/Container/Container";
import Footer from "@shared/Footer/Footer";

const LoginLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />

        </>
    );
};

export default LoginLayout;
