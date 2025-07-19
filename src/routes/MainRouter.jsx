import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/Navabar";
import { Footer } from "../components/footer/Footer";
import { Home } from "../pages/Home";


export function MainRouter(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}