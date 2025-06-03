import Image from "next/image";

export default function FAQ({question}:{question:string}) {
    return(
        <div className="info-block text-white">
            <div className="flex flex-row ml-[32px] w-[90%] items-center justify-between">
                <p className="font-bold text-[24px]">{question}</p>
                <span className="flex anak-span top-0 left-0">
                    <Image fill src={'/images/down-caret.svg'} alt=""/>
                </span>
            </div>
        </div>
    )
}