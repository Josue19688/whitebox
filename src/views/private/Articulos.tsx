import Modal from "@/components/private/ModalArticulo";
import { useArticuloStore } from "@/stores/articulo/articulo.store";
import { useEffect, useState } from "react";

export const Articulos = () => {
 // Estado para manejar el ID del artículo que se muestra en el modal

  const articulos = useArticuloStore((state) => state.articulos);
  const fetchArticulos = useArticuloStore((state) => state.fetchArticulos);

  useEffect(() => {
    fetchArticulos();
  }, [fetchArticulos]);

  const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del modal
  const [currentArticuloId, setCurrentArticuloId] = useState<string | null>(null); // Controla el ID del artículo

  const handleOpenModal = (id: string) => {
    setCurrentArticuloId(id); // Establece el ID actual del artículo
    setIsOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Cierra el modal
    setCurrentArticuloId(null); // Limpia el ID
  };


 

  return (
    <>
      <div className="breadcrumbs mb-10">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumbs-separator rtl:rotate-180">
            <span className="icon-[tabler--chevron-right]"></span>
          </li>
          <li aria-current="page">Articulos</li>
        </ul>
      </div>

      <div className="w-full rounded-lg pb-2">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-300 border-0">
                <th className="rounded-s-lg">#</th>
                <th>Titulo</th>
                <th>Creado</th>
                <th className="rounded-e-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articulos.map((articulo) => (
                <tr key={articulo.id}>
                  <td className="text-nowrap">{articulo.id}</td>
                  <td>
                    <span className="badge badge-soft badge-success text-xs">
                      {articulo.blocks[0]?.data.text || "Sin contenido"}
                    </span>
                  </td>
                  <td className="text-nowrap">
                    {new Date(articulo.createdAt).toLocaleString()}
                  </td>
                  <td>
                    <Modal
                        isOpen={!!currentArticuloId} // Controla si el modal está abierto
                        onClose={() => setCurrentArticuloId(null)} // Cierra el modal
                        articuloId={currentArticuloId} // Pasa el ID del artículo al modal
                        />
                    <button
                      type="button"
                      className="btn btn-circle hover:border-blue-300 btn-text btn-sm"
                      onClick={() => handleOpenModal(articulo.id)}

 
                    >
                      <span className="icon-[hugeicons--view]"></span>
                    </button>

                    <button className="btn btn-circle hover:border-red-400 btn-text btn-sm">
                      <span className="icon-[tabler--trash]"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <nav className="flex items-center gap-x-1">
        <button type="button" className="btn btn-soft max-sm:btn-square">
          <span className="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
          <span className="hidden sm:inline">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
            aria-current="page"
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-soft btn-square aria-[current='page']:text-bg-soft-primary"
          >
            3
          </button>
        </div>
        <button type="button" className="btn btn-soft max-sm:btn-square">
          <span className="hidden sm:inline">Next</span>
          <span className="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
        </button>
      </nav>

          
       {/* Modal */}
       <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        articuloId={currentArticuloId}
      />

    </>
  );
};
