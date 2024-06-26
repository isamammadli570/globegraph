import { Outlet } from "react-router-dom"

import AppNav from "../AppNav"

function Sidebar() {
  return (
    <div className="flex flex-col items-center gradientBg rounded-xl w-1/3 h-screen z-[1000]">
        
        <AppNav/>
        <Outlet />

        <p>List of cities</p>
        <footer className="mt-auto" >
          
        <p className="text-lg">
          @Copyright {new Date().getFullYear()} by GlobeGraph Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar