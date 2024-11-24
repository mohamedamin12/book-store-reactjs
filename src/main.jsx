import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BookStoreProvider from "./context/BookStoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookStoreProvider>
      <App />
    </BookStoreProvider>
  </StrictMode>
);
