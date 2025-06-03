import Link from "next/link";

export default function AnakButton({text,link,className}:{text:string,link:string,className:string}) {
    return(
        <Link href={`${link}`} className={`w-[268px] h-[52px] btn-gradient ${className}`}>{text}</Link>
    )
}