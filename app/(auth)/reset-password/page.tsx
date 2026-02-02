import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function page() {
    const [password,setPassword] = useState("")
    const [confPassword,setConfPassword] = useState("")

    async function onSubmit() {
        
    }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <Input placeholder="set new password " onChange={(e)=>setPassword(e.target.value)}/>
        <Input placeholder="conferm new password " onChange={(e)=>setConfPassword(e.target.value)}/>
        <Button onClick={onSubmit}>reset password</Button>
    </div>
  )
}
