

import { backendApi } from "@/api/backend-api";
import { ArticuloData, PostArticuloResponse } from "@/interfaces/Articulo.interface";
import { AxiosError } from "axios";





export class ArticuloService{
  static createArticulo = async (data: ArticuloData): Promise<PostArticuloResponse> => {
    try {
      const respuesta = await backendApi.post('/articulo', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return respuesta.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        
        if (error.response) {
          const mensajeError = error.response.data?.message || 'Error del servidor';
          throw new Error(mensajeError);
        }
        throw new Error('No se pudo conectar con el servidor.');
      }
      throw new Error('Ocurrió un error inesperado.');
    }
  };
  static getArticulos = async()=>{
        try {
            const {data} = await backendApi.get('/articulo');
            return data;
        } catch (error) {
            console.log(error)
            throw new Error('Error en la peticion')
        }
  }

    static getImagen = async (imagenUrl: string): Promise<Blob> => {
        try {
            const { data } = await backendApi.get(imagenUrl, { responseType: 'blob' });
            return data;
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            throw new Error('Error en la petición de imagen');
        }
    };

    static getArticulo = async(id:string) =>{
        try {
            const {data}= await backendApi.get(`/articulo/${id}`);
            return data;
        } catch (error) {
            console.error('Error al obtener el articulo:', error);
            throw new Error('Error no se realizo la peticion');
        }
    }

   
}