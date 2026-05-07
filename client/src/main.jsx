import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import { ProductContext } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <ProductContext>
                    <App />
                </ProductContext>
            </AuthContextProvider>
        </BrowserRouter>
    </StrictMode>,
);
