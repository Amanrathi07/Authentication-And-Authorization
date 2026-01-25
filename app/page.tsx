""
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <div>
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input placeholder="password" />

     </div>
    </div>
  );
}
