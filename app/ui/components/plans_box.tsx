import Image from "next/image";
import AnakButton from "./anak_button";
import Link from "next/link";
import { ReactNode } from "react";

export type plan = {
    plan_text: string,
    price: string
}

export default function Plan({title,plans,children,className}:
    Readonly<{title:string,plans:plan[],children?:ReactNode,className?:string}>) {
    return(
        <div className={`resources-info px-[22px] justify-around ${className}`}>
            <AnakButton className="uppercase p-0 justify-center text-[24px] w-full h-[50.61px]" text={title} link=""/>
            {children}
            {plans.map((plan,index) =>
            <div key={index} className="flex flex-col w-full gap-4">
                <div className="flex flex-row w-full font-medium text-white text-[20px] justify-between">
                    <p className="capitalize">{plan.plan_text}</p>
                    <div className="flex flex-row justify-center items-center  h-[42px] w-[120px] px-[11px] rounded-[24px] shadow-xl text-white bg-[#3d3d3d] gap-2">
                        <p className=" font-medium text-[#c3c3c3]">{plan.price}</p>
                        <Image src={"check_circle.svg"} alt={"check circle"} height={20} width={20} />
                    </div>
                </div>
            </div>)}
            <Link href={''} className="flex items-center justify-center top-[281.61px] text-center text-[16px] text-white shadow-xl bg-[#3d3d3d] w-full h-[60.97px] rounded-[14.35px]"> Buy Now </Link>
        </div>
    )
}