import Link from "next/link"
import { NavBarItem } from "./NavBarItem"


export  function Navbar() {

    const items = [
        {name:"admin" , url:"/admin"},
        {name:"dashboard" ,url:"/dashboard"},
    ]

  return (
    <div className="w-screen bg-amber-100  h-6 flex justify-between px-8">
        <div className="px-4" >
            <Link href="/">logo</Link>
        </div>
        <div className="flex gap-8">
            {
                items.map((item)=><NavBarItem name={item.name} key={item.url} url={item.url} />)
            }
        </div>
    </div>
  )
}


