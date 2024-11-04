
import { Outlet } from "react-router-dom"
import { Header } from "@/components/public/Header"
import { Footer } from "@/components/public/Footer"

export default function PublicLayout() {
  return (
    <>
      <main className="text-sm text-neutral-300 antialiased">
        <Header />
        <Outlet />
        <Footer/>
      </main>

    </>
  )
}
