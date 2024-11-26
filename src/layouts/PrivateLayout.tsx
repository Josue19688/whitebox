
import { Navigate, Outlet } from "react-router-dom"
import { Sidenav } from '../components/private/Sidenav';
import { Nav } from '../components/private/Nav';
import { userAuthStore } from "@/stores/auth/auth.store";
import { Footer } from "@/components/private/Footer";
import { Loading } from "@/components/public/Loading";

export default function PrivateLayout() {

  const authStatus = userAuthStore(state=>state.status);
  const checkAuthStatus = userAuthStore(state=>state.checkStatus);

  if(authStatus==='pending'){
    checkAuthStatus();
    return <Loading/>
  }

  if(authStatus==='unautorized'){
    return <Navigate to={'/'}/>
  }


  return (
    <>
      <div className="text-gray-800 font-inter">
        <Sidenav />
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
          <Nav />
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 p-2">
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-4 rounded-md lg:col-span-3">

                <Outlet />
                <br />
                <Footer/>
              </div>
            </div>

          </div>
        </main>
      </div>

    </>
  )
}
