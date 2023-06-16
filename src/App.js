import React from "react";
import ReactDOM from "react-dom";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);