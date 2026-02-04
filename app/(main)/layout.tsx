import { Navbar } from "@/modules/Navbar"

interface props{
    children:React.ReactNode
}

export default function layout({children}:props) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}
