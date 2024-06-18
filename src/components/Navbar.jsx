import { useState } from "react";
function Navbar() {
    const [hamburger, hamburgerToggle] = useState("");
    function handleClick() {

        if (hamburger == "")
            hamburgerToggle("active");
        else
            hamburgerToggle("");

        console.log(hamburger)

    }
    return (
        <header className="">
            <div className="logo">Portfolio</div>
            <div className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={hamburger + " nav-bar"}>
                <ul>
                    <li>
                        <a href="#about`">About</a>
                    </li>

                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;