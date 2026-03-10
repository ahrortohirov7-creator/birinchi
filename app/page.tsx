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

      <div >
        <div className="flex items-center justify-around h-35 bg-black">

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

      </div>


      {/* suz */}
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


      {/* Rasm */}
      {/* <div className="grid grid-cols-3 p-12 h-10 gap-8">
        <img className="h-100 " src="/1122.jpg" alt="" />
        <img className="h-100 rounded-3xl" src=" https://img.freepik.com/premium-photo/apple-computer_1166198-29258.jpg" alt="" />
        <img className="h-100 rounded-2xl" src="https://wheretobuyguides.com/wp-content/uploads/2016/11/where-to-buy-apple-computers-1.jpg" alt="" />
        <img className="h-100" src="https://images.macrumors.com/t/lT0PpNqzF1jYZWQwZ1XJJXsONDA=/1600x1200/smart/article-new/2017/06/mid-2017-iMac.jpg" alt="" />
        <img className="h-100" src="https://i.pinimg.com/736x/7c/50/02/7c5002d15386409c485e4fdb31d5b867.jpg" alt="rasm" />
        <img className="h-100" src="" alt="" />
        <img className="h-100" src="" alt="" />
        <img className="h-100" src="" alt="" />
        <img className="h-100" src="https://tse1.mm.bing.net/th/id/OIP.Jip2fAQD3MrYDuzvz86iYQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />

      </div> */}

      {/* dfjlskdfjs */}
      <div className="grid grid-cols-4 pt-12 gap-8">
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60  drop-shadow-2xl drop-shadow-blue-600 rounded-4xl border-b-blue-800" src="/1122.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Apple iMac</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-88 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://wheretobuyguides.com/wp-content/uploads/2016/11/where-to-buy-apple-computers-1.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Apple iMac</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 rounded-4xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://img.freepik.com/premium-photo/apple-computer_1166198-29258.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Mac book</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://i.pinimg.com/736x/7c/50/02/7c5002d15386409c485e4fdb31d5b867.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">iMac</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-88 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://www.letemsvetemapplem.eu/wp-content/uploads/2025/02/iPhone-17-Pro-1-2048x1536.jpeg" alt="" />
          <h1 className="text-xl font-mono font-bold">Iphone 17 pro Max</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-50 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl" src="https://tse1.explicit.bing.net/th/id/OIP.YlkPnyrR-5lmOuoMvTEGtQHaJh?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <h1 className="text-xl font-mono font-bold">Iphone 17 Pro Max</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="https://www.unitelle.com/wp-content/uploads/2022/12/1-8.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Iphone 14 Pro</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="//tse1.mm.bing.net/th/id/OIP.Jip2fAQD3MrYDuzvz86iYQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <h1 className="text-xl font-mono font-bold">Iphone 15 Pro </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-80 rounded-2xl drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="https://www.tuttotech.net/wp-content/uploads/2023/10/apple-iphone-15-pro-max-tt-2.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Iphone 14 Pro Max</h1>
        </div>
       <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="https://www.esm-computer.de/media/a9/f8/32/1689676003/apl-macbook-a1990-1_8cbc95b288acc935_autogenerated.webp" alt="" />
          <h1 className="text-xl font-mono font-bold">Apple Mac book</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-4xl " src="https://valkyrie.cdn.ifixit.com/media/2023/11/10080207/M3_Pro_t.jpg" alt="" />
          <h1 className="text-xl font-mono font-bold">Apple Mac book</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-60 w-60 drop-shadow-2xl drop-shadow-blue-600 rounded-2xl " src="https://item-shopping.c.yimg.jp/i/n/whatfun_pro-mkgq3-c_7_d_20230913140914" alt="" />
          <h1 className="text-xl font-mono font-bold">Apple Mac book</h1>
        </div>
      </div>

      <div className="flex p-8 gap-8"></div>



    <div className="grid grid-cols-3 w-full items-start gap-4 drop-shadow-2xl drop-shadow-blue-600">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>

      
    </div>
  
   </div>



  );
}






































































































































