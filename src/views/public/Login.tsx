import { FormEvent } from "react"
import { userAuthStore } from "@/stores/auth/auth.store";
import { useNavigate } from "react-router-dom";



export const Login = () => {
    
    const navigate = useNavigate();

    const loginUser = userAuthStore(state=>state.loginUser);

    const onSubmit = async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const {correo, password}= event.target as typeof event.target & {
            correo:{value:string};
            password:{value:string};
        }

        try {
           await loginUser(correo.value, password.value)
           navigate('/private/dashboard')

        } catch (error) {
            throw new Error('Credenciales Incorrectas!')
            console.log(error)
        }
        
        correo.value='';
        password.value='';
        
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
                <div
                    className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">

                    <div
                        className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                        <p className="text-[32px] font-bold text-zinc-950 dark:text-white">Sign In</p>
                        <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">Enter your email and password
                            to sign
                            in!</p>

                        <div className="relative my-4">
                            <div className="relative flex items-center py-1">
                                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                                <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={onSubmit}
                             className="mb-4">
                                <div className="grid gap-2">
                                    <div className="grid gap-1">
                                        <label className="text-zinc-950 dark:text-white" >Correo</label>
                                        <input className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                            id="email" placeholder="name@example.com" type="email"
                                            name="correo" />
                                        <label className="text-zinc-950 mt-2 dark:text-white">Contraseña</label>
                                        <input id="password" placeholder="Password" type="password" className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" 
                                        name="password" />
                                    </div>
                                    <button
                                        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg"
                                        type="submit">Sign in</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
