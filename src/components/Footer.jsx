import React from "react";

function Footer(){
    const d = new Date();
    let year = d.getFullYear();

    return(
    <footer>Copyright @ {year}</footer>
    );
}
export default Footer;