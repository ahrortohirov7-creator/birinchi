import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Rassrochka() {
    return(
        <div>
            <h1>Bu rassrochkaga olinadigan sahifa</h1>

            <Button>
                <Link href={"/"}>Ortga qaytish</Link>
            </Button>
        </div>
    )
}