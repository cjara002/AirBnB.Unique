import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Base = props => {
return (
    <div className="wrapper">
        <Header />

        <section className="section-container">{props.children}</section>
        <Footer />

    </div>
)
}

export default Base;