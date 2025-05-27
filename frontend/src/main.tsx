import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@gravity-ui/uikit";

import "./index.css";
import "overlayscrollbars/overlayscrollbars.css";
import "@gravity-ui/uikit/styles/styles.css";
import "./assets/fonts/fonts.css";
import "./styles.css";

import { Toaster, ToasterComponent, ToasterProvider } from "@gravity-ui/uikit";

const toaster = new Toaster();

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme="light">
        <ToasterProvider toaster={toaster}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <ToasterComponent />
        </ToasterProvider>
    </ThemeProvider>,
);
