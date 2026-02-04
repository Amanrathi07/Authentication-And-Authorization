import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import LogoutView from "@/modules/LogoutView";
import { Navbar } from "@/modules/Navbar";
import { headers } from "next/headers";
import Link from "next/link";


export default async function Home() {
  
  const session = await auth.api.getSession({
     headers: await headers() 
   })

  if(session?.user){
    return (
    <div>
      <Navbar/>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>you are login as {session.user.name}</p>
        <LogoutView />
      </div>
    </div>
    </div>
    )
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex  gap-8">
          <Button><Link href="/sign-up">sign-up</Link></Button>
          <Button><Link href="/sign-in">sign-in</Link></Button>
        </div>
    </div>
  );
}
