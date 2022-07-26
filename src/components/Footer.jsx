import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ Giray Hakan - {currentYear}</p>
        </footer>
    );
}

export default Footer;
