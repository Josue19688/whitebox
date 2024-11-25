import { backendApi } from "@/api/backend-api";
import { AxiosError } from "axios";
import { AuthResponse } from "@/interfaces/usuario.interface";




export class AuthService{
    static login = async(correo:string, password:string):Promise<AuthResponse>=>{
        try {
            const respuesta = await  backendApi.post<AuthResponse>('/auth/login',{correo, password});
            
            return respuesta.data
        } catch (error) {
            if(error instanceof AxiosError){
               
                throw new Error(error.response?.data)
            }

           
            throw new Error('Unable to login')
        }
    }

    static checkStatus = async():Promise<AuthResponse>=>{
        try {
            const {data} = await backendApi.get('/auth/status');
            return data;
        } catch (error) {
           
            throw new Error('Unautorized to login')
        }
    }


}