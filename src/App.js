import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <>
            <h1>Rendered successfully</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);