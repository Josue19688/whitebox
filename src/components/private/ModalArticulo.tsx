import { useArticuloStore } from "@/stores/articulo/articulo.store";
import React, { useEffect } from "react";
import Article from "./Article";

interface ModalProps {
  isOpen: boolean; // Controla si el modal está visible
  onClose: () => void; // Función para cerrar el modal
  articuloId: string | null; // ID del artículo actual
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, articuloId }) => {

    const articulo = useArticuloStore((state) => state.articulo);
    const fetchArticulo = useArticuloStore((state) => state.getArticulo);

    useEffect(() => {
        // Si `id` es `undefined`, asignamos un valor predeterminado vacío o mostramos un mensaje de error.
       
        if (articuloId) {
          fetchArticulo(articuloId);
        }
      }, [fetchArticulo, articuloId]);
  
  return (
    <div
      id="large-modal"
      className={`overlay modal ${isOpen ? "overlay-open:opacity-100 open opened" : "hidden"}`}
      role="dialog"
      tabIndex={-1}
    >
      <div className="modal-dialog overlay-open:opacity-100 modal-dialog-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Detalle del Artículo</h3>
            <button
              type="button"
              className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
              aria-label="Close"
              onClick={onClose} // Cierra el modal
            >
              <span className="icon-[tabler--x] size-4"></span>
            </button>
          </div>
          <div className="modal-body">
            
            {/* Contenido dinámico del modal */}
            {articulo ? (
              <Article data={articulo} />
            ) : (
              <p>No se ha seleccionado ningún artículo.</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="text-red-600 m-2 p-2 hover:bg-red-700 hover:text-white text-sm font-sans border border-red-400 rounded-md"
              onClick={onClose} // Cierra el modal
            >
              Cerrar
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
