import Link from "next/link"
import { NavBarItem } from "./NavBarItem"

export function Navbar() {

  const NavItem = [
    { name: "admin", url: "/admin" },
    { name: "dashboard", url: "/dashboard" },
  ]

  return (
    <header className="w-full border-b bg-background">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition"
        >
          logo
        </Link>

        {/* Nav items */}
        <div className="flex items-center gap-6">
          {NavItem.map((item) => (
            <NavBarItem
              key={item.url}
              name={item.name}
              url={item.url}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}
