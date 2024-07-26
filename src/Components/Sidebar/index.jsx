import { Outlet } from "react-router-dom"

import AppNav from "../AppNav"

function Sidebar() {
  return (
    <div className="flex flex-col items-center gradientBg rounded-xl w-1/3 h-100 z-[1000]">
        
        <AppNav/>
        <Outlet />

        <footer className="mt-auto" >
          
        <p className="text-lg text-white">
          @Copyright {new Date().getFullYear()} by GlobeGraph Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar