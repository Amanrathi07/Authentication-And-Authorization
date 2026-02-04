"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

interface props{
    name:string ;
    url:string
}

export function NavBarItem({name,url}:props){
    const pathName = usePathname();
    
    return(
        <div >
            <span><Link href={url}>{name}</Link></span>
        </div>
    )
}