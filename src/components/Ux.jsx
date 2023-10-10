import Background from "../assets/grn-trees-rdr.jpg";

import Soundwaves from "../assets/soundwaves.png";
import Lilypad from "../assets/lilypad.png";

const Ux = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Background})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <div className="flex flex-row flex-wrap justify-center items-center p-12">
                <div className="h-full w-4/5 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
                    <div className="flex flex-row">
                        <img
                            className="w-3/5 p-8 brightness-80"
                            src={Soundwaves}
                            alt=""
                        />

                        <p className="text-stone-100 p-8 font-medium font-primary2 text-lg text-center ml-8 max-w-lg">
                            SOUNDWAVES <br />
                            <br /> A music sales tracking app for musicians with
                            a social media feature. Artists create an account
                            and register to view their sales worldwide. They are
                            also able to communicate and share information with
                            other artists in their network.
                            <br />
                            <br />
                            <a
                                className="hover:text-yellow-200 bg-black"
                                href="https://www.figma.com/proto/G51ZTT5gMKLmB79QQdehcC/Music-Sales-Tracker-App---Ver.3?type=design&node-id=75-830&t=44qX0KRZERgFVJWe-1&scaling=scale-down&page-id=72%3A820&starting-point-node-id=75%3A830&mode=design"
                                target="blank"
                            >
                                View the prototype here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="h-full w-4/5 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
                    <div className="flex flex-row">
                        <img
                            className="w-3/5 p-8 brightness-80"
                            src={Lilypad}
                            alt=""
                        />

                        <p className="text-stone-100 p-8 text-medium font-primary2 text-lg text-center ml-8 max-w-lg">
                            LILYPAD COMMUNITY GARDENS <br />
                            <br /> An app for joining a local community garden.
                            Users can choose the location, size and type of plot
                            and then purchase it through the app. <br />
                            <br />
                            <a
                                className="hover:text-yellow-200 bg-black"
                                href="https://www.figma.com/proto/NVGoeZ2m3YNsln8sCapMlD/Lilypad-Community-Gardens?node-id=65-1406&starting-point-node-id=65%3A1406&mode=design&t=vYKOz7dltWf4Hz6N-1"
                                target="blank"
                            >
                                View the prototype here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ux;
