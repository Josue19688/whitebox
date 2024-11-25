
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { HomePage } from "./views/public/Home";
import { NosotrosPage } from "./views/public/Nosotros";
import { ServiciosPage } from "./views/public/Servicios";
import { BlogPage } from "./views/public/Blog";
import PrivateLayout from "./layouts/PrivateLayout";
import { Articulo } from "./views/private/Articulo";
import { useEffect } from "react";
import { IStaticMethods } from "flyonui/flyonui";




// Declaración global para FlyonUI
declare global {
    interface Window {
      HSStaticMethods: IStaticMethods;
    }
  }
  
  // Componente para manejar la inicialización de FlyonUI
  function FlyonUIInitializer() {
    const location = useLocation();
  
    useEffect(() => {
      const loadFlyonui = async () => {
        const flyonui = await import('flyonui/flyonui');
        if (flyonui) {
          window.HSStaticMethods?.autoInit();
        }
      };
  
      loadFlyonui();
    }, [location.pathname]);
  
    return null; // Este componente no renderiza nada, solo inicializa.
  }



export default function Router() {
    return (
        <BrowserRouter>
             {/* FlyonUIInitializer debe estar dentro de BrowserRouter */}
             <FlyonUIInitializer />
            <Routes>
                <Route element={<PublicLayout />} >
                    <Route path="/" element={<HomePage/>} index />
                    <Route path="/nosotros" element={<NosotrosPage/>} />
                    <Route path="/servicios" element={<ServiciosPage/>} />
                    <Route path="/blog" element={<BlogPage/>} />
                </Route>
                <Route element={<PrivateLayout />} >
                    <Route path="/private/articulo" element={<Articulo/>} index />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}