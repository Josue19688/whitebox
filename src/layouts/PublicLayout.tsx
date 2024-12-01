
import { Navigate, Outlet } from "react-router-dom"
import { Header } from "@/components/public/Header"
import { Footer } from "@/components/public/Footer"
import { Loading } from "@/components/public/Loading";
import { userAuthStore } from "@/stores/auth/auth.store";
import { Gradiente } from "@/components/public/Gradiente";

export default function PublicLayout() {
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
    <Gradiente/>
      <main className="text-sm text-neutral-300 antialiased">
        <Header />
        <Outlet />
        <Footer/>
      </main>

    </>
  )
}
