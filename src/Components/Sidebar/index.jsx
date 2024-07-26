import { Outlet } from "react-router-dom"

import AppNav from "../AppNav"

function Sidebar() {
  return (
    <div className="flex flex-col items-center gradientBg2 rounded-xl w-1/3 h-screen z-[1000]">
        
        <AppNav/>
        <Outlet />

        <footer className="mt-auto" >
          
        <p className="text-lg">
          @Copyright {new Date().getFullYear()} by GlobeGraph Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar