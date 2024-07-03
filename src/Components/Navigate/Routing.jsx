import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ListCars from "../ListCars";
import Semulation from "../Semulation";
import Contact from "../Contact";
import Details from "../Details";

const Routing = () => {
    return <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/list voiture" element={<ListCars />} />
            <Route path="/Sèmulation" element={<Semulation />} />
            <Route path="/details" element={<Details />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
}

export default Routing;