import React from "react";

const date = new Date();

function Footer() {
    return <div>
        <footer>
            <p>Diseñada por MGRDesarrollo | Copyright {date.getFullYear()} All rights reservedd.</p>
        </footer>
    </div>
}

export default Footer;