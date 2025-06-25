"use client"
import { usePathname } from "next/navigation"

export default function({children}){
    const currentPath=usePathname()
    console.log(currentPath);
    
    return (
        <>
       {currentPath!=="/contact/company"?<h1>Comman Layout for contact page</h1>:null}
        {children}
        </>
    )
}