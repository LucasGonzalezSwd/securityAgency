import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Asegúrate de que la ruta del archivo sea correcta
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CustomNavigationProvider } from "./components/CustomNavigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
    <CustomNavigationProvider>
        <App />
        </CustomNavigationProvider>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);