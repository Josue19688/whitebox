
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { HomePage } from "./views/public/Home";
import { NosotrosPage } from "./views/public/Nosotros";
import { ServiciosPage } from "./views/public/Servicios";
import { BlogPage } from "./views/public/Blog";



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />} >
                    <Route path="/" element={<HomePage/>} index />
                    <Route path="/nosotros" element={<NosotrosPage/>} />
                    <Route path="/servicios" element={<ServiciosPage/>} />
                    <Route path="/blog" element={<BlogPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}