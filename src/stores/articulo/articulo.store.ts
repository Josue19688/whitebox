// src/stores/articulo.store.ts

import { Article } from '@/interfaces/ArticlePublicResponse';
import { ArticuloData, Articulos } from '@/interfaces/Articulo.interface';
import { Articulo } from '@/interfaces/ArticulosAll.interface';

import { ArticuloService } from '@/services/articulo.service';
import { create, StateCreator } from 'zustand';


export type ArticuloStatus = 'completado' | 'fallido' | 'pending';


interface ArticuloState {
    status:ArticuloStatus;
    articulo:Articulos|null;
    articulos: Articulo[];
    articles:Article[];
    
    createArticulo: (data:ArticuloData) => Promise<void>;
    fetchArticulos: () => Promise<void>;
    fetchArticlesPublic: () => Promise<void>;
    getArticulo:(id:string)=>Promise<void>;
    clearArticulo:()=>Promise<void>;
}

const storeArticulo: StateCreator<ArticuloState> = (set)=>({
    status:'pending',
    articulo:null,
    articulos:[],
    articles:[],
    createArticulo: async (datos) => {
        try {
            const { ok, articulos } = await ArticuloService.createArticulo(datos);
    
            if (ok) {
                set({
                    status: 'completado',
                    articulo:articulos,
                });
            } else {
                throw new Error('No se pudo crear el artículo. Respuesta no exitosa.');
            }
        } catch (error) {
        
            set({
                status: 'fallido',
                articulo: undefined, 
            });
    
            if (error instanceof Error) {
                throw new Error(`Error al crear el artículo, ${error.message}`);
            } else {
                throw new Error(`Error al crear el artículo`);
            }

        }
    },
    fetchArticulos: async () => {
        try {
            const {ok, articulos} = await ArticuloService.getArticulos();
            if (ok) {
                set({ status:'completado', articulos });
            }
        } catch (error) {
            console.error('Error al obtener los artículos:', error);
        }
    },
    fetchArticlesPublic: async () => {
        try {
            const {ok, articles} = await ArticuloService.getArticulosPublic();
            if (ok) {
                set({ status:'completado', articles });
            }
        } catch (error) {
            console.error('Error al obtener los artículos:', error);
        }
    },
    getArticulo: async(id:string)=>{
        try {
            const articulo = await ArticuloService.getArticulo(id);
            set({status:'completado',articulo})
        } catch (error) {
            console.error('Error al obtener el articulo:', error);
            set({ status: 'fallido', articulo: null });
        }
    },
    clearArticulo:async()=>{
        set({ status: 'pending', articulo: null });
    }
    
    

})

export const useArticuloStore = create<ArticuloState>()(storeArticulo);
