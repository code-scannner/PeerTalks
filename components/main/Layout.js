"use client"
import { usePathname } from "next/navigation";
import NavBar from "../NavBar";

export default function Layout({children}) {
    const pathname  = usePathname();

    // Check if the current page is the homepage
    const isHomePage = pathname === '/';
  
    return (
      <>
        {/* Conditionally render the Navbar based on the current page */}
        {!isHomePage && <NavBar />}
        
        {/* Render the page content */}
        {children}
      </>
    );
}