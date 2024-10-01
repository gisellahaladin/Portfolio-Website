import Background from "../assets/grn-trees-red.jpg";
import Headshot from "../assets/headshot-neu.jpg";

const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Background})`,
                backgroundAttachment: "fixed", // This makes the background fixed
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <div className="flex flex-row flex-wrap justify-center items-center p-28">
                <div className="h-full w-95 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
                    <div className="flex flex-row">
                        <img
                            className="w-[400px] h-[400px] p-8 rounded-full brightness-80"
                            src={Headshot}
                            alt=""
                        />

                        <p className="text-stone-100 font-primary2 p-8 font-semi-bold text-2xl text-center max-w-xl">
                            Hi, I`&apos;`m Gisella Haladin! <br />
                            <br />
                            I`&apos;`m a Full-Stack Web and App Developer,
                            Graphic Designer, UX/UI Designer and Illustrator
                            currently living in Germany.
                            <br />
                            <br />
                            Please contact me through{" "}
                            <a
                                className="bg-black hover:text-cyan-700"
                                href="https://github.com/gisellahaladin"
                                target="blank"
                            >
                                my GitHub
                            </a>{" "}
                            if you are interested in working with me on any
                            projects.
                        </p>
                    </div>
                </div>
                {/* <div>
                    <p className="text-[#beeed3] p-8 font-bold text-2xl text-center max-w-md">
                        HOW ARE YOU?
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default About;
