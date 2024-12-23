



//import { userAuthStore } from '@/stores/auth/auth.store'
import { userAuthStore } from '@/stores/auth/auth.store';
import axios from 'axios'


const backendApi = axios.create({
    //baseURL:'http://localhost:3000'
    baseURL:'https://backendpagina-production.up.railway.app'
})


//TODO: Interceptors

backendApi.interceptors.request.use(
    (config)=>{
        const token = userAuthStore.getState().token;

        
        if(token){
            config.headers['Authorization'] =`Bearer ${token}`
        }

        return config;
    }
)


export {
    backendApi
}