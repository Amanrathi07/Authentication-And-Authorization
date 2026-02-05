import { Suspense } from "react"

interface props {
    children : React.ReactNode ;
}

function layout({children}:props) {
  return (
    <Suspense>
        {children}
    </Suspense>
  )
}

export default layout