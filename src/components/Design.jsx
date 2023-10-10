import { useState } from "react";

import Background from "../assets/grn-trees-rdrd.jpg";

import Barba from "../assets/barba-ad.jpg";
import Warhol from "../assets/warhol3.jpg";
import ToTheLeft from "../assets/totheleft.jpg";
import Cooper from "../assets/cooper.jpg";
import Iggy from "../assets/iggy.jpg";
import DeMarchi from "../assets/demarchi.jpg";
import FirstCapital from "../assets/firstcapital.jpg";
import Toxic from "../assets/toxic.jpg";

const Design = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: Warhol,
            title: "Andy Warhol",
            description:
                "Catalogue layout and design for t-shirt transfer print series with Bang-On. Licensed by the Andy Warhol Foundation.",
        },
        {
            src: Barba,
            title: "Barbarella Hair Salon",
            description: "Print Ad for Barbarella Hair Salon",
        },
        {
            src: DeMarchi,
            title: "DeMarchi Parfum",
            description: "Logo for DeMarchi Parfum",
        },
        {
            src: Cooper,
            title: "Alice Cooper",
            description: "Licensed t-shirt-design for Alice Cooper",
        },
        {
            src: Iggy,
            title: "Iggy Pop",
            description: "Licensed t-shirt-design for Iggy Pop",
        },
        {
            src: ToTheLeft,
            title: "To The Left DJ Night",
            description: "Logo for 'To The Left' DJ Night",
        },
        {
            src: Toxic,
            title: "Toxic",
            description: "T-shirt design for Bang-On",
        },
        {
            src: FirstCapital,
            title: "First Capital Realty",
            description: "Logo for First Capital Realty",
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
                        className="h-full w-95 bg-cyan-950 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl p-8 transform hover:scale-95 duration-150"
                        onClick={() => handleImageClick(image)}
                    >
                        <div className="flex flex-col">
                            <img
                                className={`max-w-[250px] brightness-50 rounded-lg max-h-[250px] transition-opacity ease-in-out duration-400 hover:brightness-100 ${
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

export default Design;
