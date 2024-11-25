

import { User } from "@/interfaces/usuario.interface";
import { AuthService } from "@/services/auth.service";

import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type AuthStatus = 'authorized' | 'unautorized' | 'pending';

export interface AuthState{
    status:AuthStatus;
    token?:string;
    usuario?:User

    loginUser:(correo:string, password:string)=>Promise<void>;
    checkStatus:()=>Promise<void>;
    logoutUser:()=>void;

}


const storeApi: StateCreator<AuthState> = (set)=>({
    status:'pending',
    token:undefined,
    usuario: undefined,

    loginUser: async (correo:string, password:string)=>{
        try {
            const {token, user} = await AuthService.login(correo, password);
            
            set({status:'authorized', token, usuario:user})
        } catch (error) {
           
            set({status:'unautorized', token:undefined, usuario:undefined});
            throw new Error('Credenciales Incorrectas!')
            

        }
    },

    checkStatus:async()=>{
        try {
            const {token, user} = await AuthService.checkStatus();
            set({status:'authorized', token, usuario:user})
        } catch (error) {
            set({status:'unautorized', token:undefined, usuario:undefined});
            throw new Error('Credenciales Incorrectas!')
            
        }
    },

    logoutUser: ()=> {
        set({status:'unautorized', token:undefined, usuario:undefined});
    },

})

export const userAuthStore = create<AuthState>()(
   devtools(
        persist(
            storeApi,
            {
                name:'auth-storage'
            }
        )
        
   )
);