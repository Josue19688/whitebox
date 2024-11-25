// src/stores/articulo.store.ts

import { ArticuloData, Articulos } from '@/interfaces/Articulo.interface';
import { ArticuloService } from '@/services/articulo.service';
import { create, StateCreator } from 'zustand';


export type ArticuloStatus = 'completado' | 'fallido' | 'pending';


  

interface ArticuloState {
    status:ArticuloStatus;
    articulos:Articulos|null;
    
    createArticulo: (data:ArticuloData) => Promise<void>;
   
}

const storeArticulo: StateCreator<ArticuloState> = (set)=>({
    status:'pending',
    articulos:null,
    createArticulo: async (datos) => {
        try {
            const { ok, articulos } = await ArticuloService.createArticulo(datos);
    
            if (ok) {
                set({
                    status: 'completado',
                    articulos,
                });
            } else {
                throw new Error('No se pudo crear el artículo. Respuesta no exitosa.');
            }
        } catch (error) {
        
            set({
                status: 'fallido',
                articulos: undefined, 
            });
    
            if (error instanceof Error) {
                throw new Error(`Error al crear el artículo, ${error.message}`);
            } else {
                throw new Error(`Error al crear el artículo`);
            }

        }
    },
    
    
    

})

export const useArticuloStore = create<ArticuloState>()(storeArticulo);
