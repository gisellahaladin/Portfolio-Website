import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Background from "./assets/grn-trees.jpg";

const App = () => {
    return (
        <div
            className="bg-fixed"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
