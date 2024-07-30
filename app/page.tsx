import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginButton } from "@/components/auth/login-btn";

export default function Home() {
  return (
    <main className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-xl font-bold">Advanced Auth System</h1>
            <p>This is an advanced authentication and authorization system built using react, nextjs, Authjs, shadcn-UI, prisma and Neon-DB</p>
          </div>
          <div className="grid gap-4">
           
            <LoginButton mode="modal" asChild>
          <Button variant={"dexlr"} size="lg">Get started</Button>
          </LoginButton>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block" >
        {/* <Image
          src=""
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
      </div>
    </main>
  );
}
