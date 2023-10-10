import { useState } from "react";

import Background from "../assets/grn-trees-grnr.jpg";

import Faces from "../assets/faces.jpg";
import Wolf from "../assets/wolf.jpg";
import Batty from "../assets/batty.jpg";
import SpaceCat from "../assets/spacecat.jpg";
import Sphynx from "../assets/sphynx.jpg";
import Gator from "../assets/gator.jpg";
import Marilyn from "../assets/marilyn.jpg";
import SeeingEye from "../assets/seeingeye.jpg";

const Multimedia = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: Faces,
            title: "Faces",
            description: "Hand-drawn 'faces' series for Bang-On",
        },
        {
            src: Wolf,
            title: "Wolf",
            description: "Watercolor painting",
        },
        {
            src: Gator,
            title: "Gator",
            description: "Watercolor and Ink painting",
        },
        {
            src: Sphynx,
            title: "Sphynx",
            description: "Digital artwork made in Procreate",
        },
        {
            src: SpaceCat,
            title: "Space Cat",
            description: "Digital artwork made in Procreate",
        },
        {
            src: Batty,
            title: "Batty",
            description: "Watercolor and Ink painting",
        },
        {
            src: Marilyn,
            title: "Marilyn Tattoo",
            description: "Marilyn skull design and tattoo",
        },
        {
            src: SeeingEye,
            title: "All Seeing Eye",
            description: "All Seeing Eye design and tattoo",
        },
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

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
            <div className="flex flex-row flex-wrap justify-center items-center p-16 space-x-12">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="h-full w-95 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl p-8 transform hover:scale-105 duration-100"
                        onClick={() => handleImageClick(image)}
                    >
                        <div className="flex flex-col">
                            <img
                                className={`max-w-[250px] brightness-70 rounded-lg max-h-[250px] transition-opacity ease-in-out duration-400 hover:brightness-100 ${
                                    selectedImage ? "opacity-50" : ""
                                }`}
                                src={image.src}
                                alt={image.title}
                            />
                            <p className="text-stone-100 mt-4 font-medium bg-black text-xl text-center max-w-md">
                                {image.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 transition-opacity ease-in-out duration-500"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="bg-black bg-opacity-50 p-16 rounded-lg shadow-lg">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[60vh] max-w-[60vw] object-contain rounded-lg"
                        />
                        <p className="flex justify-center font-primary2  text-stone-100 mt-4 font-medium text-xl text-center bg-black p-8 max-w-[60vw]">
                            {selectedImage.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Multimedia;

// const Multimedia = () => {
//     return (
//         <div
//             style={{
//                 backgroundImage: `url(${Background})`,
//                 backgroundAttachment: "fixed", // This makes the background fixed
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100vh",
//             }}
//         ></div>
//     );
// };

// export default Multimedia;
