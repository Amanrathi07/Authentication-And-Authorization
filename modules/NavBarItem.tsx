"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface props {
  name: string
  url: string
}

export function NavBarItem({ name, url }: props) {
  const pathName = usePathname()

  const isActive = pathName === url

  return (
    <Link
      href={url}
      className={cn(
        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        isActive &&
          "text-foreground bg-muted after:absolute after:inset-x-1  after:bg-foreground after:rounded-full"
      )}
    >
      {name}
    </Link>
  )
}
