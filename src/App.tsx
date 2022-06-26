import { useSelector } from "react-redux";
import { RootState } from "./Store";
import Navbar from "./components/navbar/index";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Dialouge from "./components/dialogue";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div
      data-theme={theme ? "winter" : "business"}
      className="h-screen w-screen subpixel-antialiased"
    >
      <Dialouge />
      <ToastContainer />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
