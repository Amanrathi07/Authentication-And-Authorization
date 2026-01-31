import { getServerSession } from "@/lib/getServerSession";
import { redirect } from "next/navigation";
import EmailVerificationPage from "./EmailVerificationPage";

export default async function Page() {
  const session = await getServerSession();
  if(!session?.user) redirect("/sign-in");
  if(session.user.emailVerified) redirect("/");
  return (
    <EmailVerificationPage />
  )
}
