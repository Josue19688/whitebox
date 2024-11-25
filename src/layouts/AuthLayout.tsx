

import { Loading } from "@/components/public/Loading";
import { userAuthStore } from "@/stores/auth/auth.store";
import { Navigate, Outlet } from "react-router-dom"

export default function AuthLayout() {

  const authStatus = userAuthStore(state=>state.status);
  const checkAuthStatus = userAuthStore(state=>state.checkStatus);

  if(authStatus==='pending'){
    checkAuthStatus();
    return <Loading/>
  }

  if(authStatus==='authorized'){
    return <Navigate to={'/private/dashboard'}/>
  }
  return (
    <>
      <main className="text-sm font-sans text-neutral-300 antialiased">
      
        <Outlet />
        
      </main>

    </>
  )
}
