import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WebDev from "./WebDev";
import Ux from "./Ux";
import Design from "./Design";
import Multimedia from "./Multimedia";
import About from "./About";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/webdev" element={<WebDev />} />
                <Route path="/ux" element={<Ux />} />
                <Route path="/design" element={<Design />} />
                <Route path="/multimedia" element={<Multimedia />} />
                <Route path="/contact" element={<About />} />
            </Routes>
        </div>
    );
};

export default Main;
