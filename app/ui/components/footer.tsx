import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-[#101010] text-white pt-8 flex flex-col h-[476px] w-screen relative">
            <div className="w-full h-full flex flex-col">
                <div className="relative pt-4 ml-[120px] h-[73px] w-[172px]">
                    <Image fill src={'/images/logo.svg'} alt="logo"/>
                </div>

                <div className="pb-8 ml-[120px] mr-30 flex flex-row justify-between flex-grow items-center">
                <div className="w-[50%] flex flex-col">
                    <p className="text-[16px] font-medium ">Begin your journey now</p>
                    <p className="text-[40px] font-bold py-1">Unlock the new you</p>
                    <Link href={""} className="w-[268px] h-[52px] btn-gradient">Start Your Journey</Link> 
                </div>

                <ul className="flex flex-col gap-2">
                    <Link href={''}>Get in touch</Link>
                    <div className="flex flex-row gap-1 items-center ">
                    <Link className="relative w-8 h-8 "href={''}>
                        <Image fill src={'/images/insta.svg'} alt="instagram" />
                    </Link>
                    <Link className="relative w-8 h-8 "href={''}>
                        <Image fill src={'/images/fb.svg'} alt="facebook" />
                    </Link>
                    <Link className="relative w-8 h-8 "href={''}>
                        <Image fill src={'/images/fb.svg'} alt="facebook" />
                    </Link>
                    </div>
                </ul>
                
                <ul>
                    <li><Link href={'/programs'}>Programs</Link></li>
                    <li><Link href={'/privacy'}>Terms & Privacy</Link></li>
                    <li><Link href={'/terms-of-service'}>Terms of Service</Link></li>
                    <li><Link href={'/contact-us'}>Contact</Link></li>
                </ul>
                </div>
            </div>

            <div className="pb-8 absolute bottom-0 w-full text-center pb-4">
                <p className="text-[16px] font-medium">&copy; 2025 ONAKS FITNESS. All rights reserved.</p>
            </div>
        </footer>
    )
}