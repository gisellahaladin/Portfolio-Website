import Background from "../assets/grn-trees-lt.jpg";
import Cinematika1 from "../assets/cinematika1.png";
import Cinematika2 from "../assets/cinematika2.png";
import Trivia1 from "../assets/trivia1.png";
import Trivia2 from "../assets/trivia2.png";

// import "./WebDev.css";

const WebDev = () => {
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
                            className="w-[300px] p-8 brightness-80"
                            src={Cinematika1}
                            alt=""
                        />
                        <img
                            className="w-[300px] h-[250px] p-8 brightness-80"
                            src={Cinematika2}
                            alt=""
                        />
                        <p className="text-stone-100 p-8 font-medium font-primary2 text-lg text-center ml-10 max-w-lg">
                            CINEMATIKA <br />
                            <br /> An Arthouse movie web app where you can add,
                            delete and rate movies. Made using React.js, Axios,
                            React-Router-dom, Express and PostgreSQL.
                            <br />
                            <br />
                            <a
                                className="hover:text-pink-300 bg-black"
                                href="https://regal-panda-97998e.netlify.app"
                            >
                                https://regal-panda-97998e.netlify.app
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="h-full w-4/5 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
                    <div className="flex flex-row">
                        <img
                            className="w-[300px] h-[250px] p-8 brightness-80"
                            src={Trivia1}
                            alt=""
                        />
                        <img
                            className="w-[300px] h-[300px] p-8 brightness-80"
                            src={Trivia2}
                            alt=""
                        />
                        <p className="text-stone-100 p-8 text-medium font-primary2 text-lg text-center ml-10 max-w-lg">
                            TRIVIA QUIZ <br />
                            <br /> A Trivia quiz game that calculates your score
                            and gives you the correct answers at the end. Made
                            using React.js and a trivia API. <br />
                            <br />
                            <a
                                className="hover:text-yellow-200 bg-black"
                                href="https://magical-kringle-b6d1fe.netlify.app"
                            >
                                https://magical-kringle-b6d1fe.netlify.app
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-4 mt-6">
                <a href="https://github.com/gisellahaladin" target="blank">
                    <button className="bg-black text-center text-xl text-white p-2 font-primary2 border border-white hover:text-pink-300">
                        CLICK HERE TO VISIT MY GITHUB FOR MORE PROJECTS
                    </button>
                </a>
            </div>
        </div>
    );
};

export default WebDev;
