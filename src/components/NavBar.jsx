import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        let style1 = document.createElement("style");
        let style2 = document.createElement("style");
        let after = document.getElementById("after-te1");
        let before = document.getElementById("before-te1");
        const setKeyframesRules = (n, start = 0) => {
            let steps = "";
            for (let i = start; i <= n; i++) {
                let percent = (i / n) * 100;
                let random1 = `${Math.random() * 150}px`;
                let random2 = `${Math.random() * 150}px`;
                steps = steps.concat(
                    `${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `
                );
            }
            return steps;
        };
        let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(
            24
        )} }`;
        let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(
            32,
            2
        )} }`;
        style1.innerHTML = keyframes1;
        style2.innerHTML = keyframes2;
        after.appendChild(style1);
        before.appendChild(style2);
        after.style.animation =
            "glitch-anim-1 2.5s infinite linear alternate-reverse";
        before.style.animation =
            "glitch-anim-2 3s infinite linear alternate-reverse";

        // return () => {
        //     // Remove the animation styles when the component unmounts
        //     document.getElementById("after-te1").innerHTML = "";
        //     document.getElementById("before-te1").innerHTML = "";
        // };
    }, []);

    return (
        <header className="bg-neutral-950 flex">
            <div className="h-full flex justify-right items-center p-2 bg-neutral-950">
                <h1 className="text-stone-100 text-7xl font-bold relative inline-block m-4">
                    <span
                        id="before-te1"
                        className="absolute top-0 left-0.5 w-full h-full bg-transparent"
                        style={{
                            textShadow: "-2px 0 #49FC00",
                            clipPath: "rect(24px, 550px, 90px, 0)",
                        }}
                        aria-hidden="true"
                    >
                        Curiosity Produx
                    </span>{" "}
                    {/* glitch::before */}
                    Curiosity Produx
                    <span
                        id="after-te1"
                        className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
                        style={{
                            textShadow: "-2px 0 spin(#49FC00, 180)",
                            clipPath: "rect(85px, 550px, 140px, 0)",
                        }}
                        aria-hidden="true"
                    >
                        Curiosity Produx
                    </span>{" "}
                    {/* glitch::after */}
                </h1>
            </div>
            <nav className="flex-grow h-16 m-6">
                {/* Hamburger menu button */}
                <button
                    className="lg:hidden text-stone-100 text-6xl"
                    onClick={toggleNav}
                >
                    &#9776;
                </button>

                <ul
                    className={`lg:flex flex-row align-right justify-end space-x-6 text-xl text-stone-100 p-6 font-primary ${
                        showNav ? "block" : "hidden"
                    }`}
                >
                    {/* <ul className="flex flex-row align-right justify-end space-x-6 text-xl text-stone-100 p-6 font-primary"> */}
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-rose-900 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/">{"// Home //"}</NavLink>
                    </li>
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/webdev">{"// Web Dev //"}</NavLink>
                    </li>
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/ux">{"// UX:UI //"}</NavLink>
                    </li>
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/design">{"// Design //"}</NavLink>
                    </li>
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/multimedia">{"// Multimedia //"}</NavLink>
                    </li>
                    <li className="hover:text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-cyan-500 to-red-600 transition duration-350 ease-in-out">
                        <NavLink to="/contact">{"// About //"}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default NavBar;
