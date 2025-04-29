import { Outlet } from "react-router";

import Header from "@shared/Header/Header";
import Container from "@ui/Container/Container";
import Footer from "@shared/Footer/Footer";
import ScrollContainer from "@ui/ScrollContainer";

const MainLayout = () => {
    return (
        <ScrollContainer className="flex scrollbar">
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </ScrollContainer>
    );
};

export default MainLayout;
