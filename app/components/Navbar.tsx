import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

const frameworks = [
    "Next.js",
    "SvelteKit",
    "Nuxt.js",
    "Remix",
    "Astro",
] as const;
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@base-ui/react";
import Link from "next/link";


export default function Home() {
    return (

            
<div>
            <div className="flex items-center justify-around h-35 bg-emerald-900">

          {/* matn */}
          <img className="h-22" src=" https://i.pinimg.com/236x/fa/5e/67/fa5e67376018e06bd8ffb06b3129a717.jpg?nii=t" alt="rasm" />
          <Link href={"/"}>
            <h1 className="flex text-4xl text-white font-mono font-bold pl-10  ">Apple<h1 className="text-blue-700">.uz</h1></h1>
          </Link>

          {/* field */}
          <div className=" flex items-center text-white">
            <Field>
              <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
              <Input id="input-demo-api-key" type="text" placeholder="sk-..." />
              <FieldDescription>
                Your API key is encrypted and stored securely.
              </FieldDescription>
            </Field>
          </div>

          {/* avatar */}
          <div>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <AvatarGroup className="grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>

        </div>





      <div className=" flex items-center justify-around px-44 h-20 bg-blue-700 gap-12 text-amber-100 text-4xl">
        <Button>
          <Link href={"/brends"}>Brend</Link>
        </Button>

         <Button>
          <Link href={"main"}>Asosiy</Link>
         </Button>
         <Button>
          <Link href={"instalmets"}>Nout booklar</Link>
         </Button>
        
        <Button>
          <Link href={"/shopping"}> Telefonlar </Link>
        </Button>
    
      </div>
</div>




    )

}