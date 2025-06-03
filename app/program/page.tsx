import Image from "next/image";
import Plan from "../ui/components/plans_box";
import AnakButton from "../ui/components/anak_button";

export default function Program(){
    return(
        <div className="relative min-h-screen min-w-screen ">
            <main className=" relative flex flex-col">
                <section className="flex flex-col h-[327px] bg-[#161F17] items-center justify-center gap-4">
                    <div className="flex flex-col text-white text-center items-center">
                        <p className="font-bold text-[40px]">My Programs</p>
                        <p className="font-medium text-[16px]">Every program is based on methods that helped me transform from <span className="span-green">10kg</span> to <span className="span-green">78kg</span>.<br/>
                        <span className="span-green">Real Experience. Real Resulzilt Different</span></p>
                    </div>
                </section>

                <section className="relative flex flex-col items-center h-[951px] bg-[#151515] gap-4">
                    <p className="text-white font-bold text-[40px] text-center mt-10">Training Programs</p>
                    <p className="capitalize text-white text-[16px] font-medium">Curated Shopping plan to take the guess work out of shopping</p>

                    <div className="relative flex flex-row items-center jutify-center my-[20px] gap-4">
                        <Plan title={"male programs"} plans={[
                            {plan_text:"fat loss program",price:"$14.99"},
                            {plan_text:"muscle building",price:"$14.99"},
                            {plan_text:"body recomposition",price:"$14.99"}]} />
                        <Plan title={"male programs"} plans={[
                            {plan_text:"fat loss program",price:"$14.99"},
                            {plan_text:"muscle building",price:"$14.99"},
                            {plan_text:"body recomposition",price:"$14.99"}]} />
                    </div>

                    <div className="relative flex flex-col items-center justify-center text-white text-[16px] w-[794px] h-[297px] rounded-[14.35px] ring-[0.3px] ring-(--theme-green)" id="glute">
                        <Image alt="background" className="rounded-[14.35px]" fill={true} src={'/images/frame4.png'}/>
                        <div className="relative flex flex-col z-2 items-center justify-center">
                            <p className="text-[#c3c3c3] text-[24px] capitalize font-bold">new: glute max program</p>
                            <p className="my-2">Specializes Training for glute development and lower body toning</p>
                            <AnakButton text={"$29.99 - LEARN MORE"} link={""} className={"font-medium text-[16px] uppercase p-0 justify-center w-[232px] h-[46px] rounded-[14px] "}/>
                        </div>
                    </div>

                </section>

                <section className="relative flex flex-col items-center h-[1425px] bg-[#151515] gap-4" id="grocery">
                    <Image alt="background" className="rounded-[14.35px] object-cover " fill={true} src={'/images/grocery.jpg'}/>
                    <div className="z-2">
                            <p className="text-white font-bold text-[40px] text-center mt-10">Grocery List</p>
                            <p className="capitalize text-white text-[16px] font-medium">Curated Shopping plan to take the guess work out of nutrition</p>
                        <div className="relative flex flex-row items-center jutify-center my-[20px] gap-4">
                            <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"weight loss"} plans={[
                                {plan_text:"mid weight loss",price:"$14.99"},
                                {plan_text:"standard weight loss",price:"$14.99"},
                                {plan_text:"accelerated weight loss",price:"$14.99"}]} />
                            <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"bulking"} plans={[
                                {plan_text:"lean bulk",price:"$14.99"},
                                {plan_text:"standardized bulk",price:"$14.99"}]} />
                        </div>
                        <div className="relative flex flex-row items-center jutify-center my-[20px] gap-4">
                            <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"weight loss"} plans={[
                                {plan_text:"vegan mid weight loss",price:"$14.99"},
                                {plan_text:"vegan standard weight loss",price:"$14.99"},
                                {plan_text:"vegan accelerated weight loss",price:"$14.99"}]}>
                                    <div className="flex relative bg-[#2e2e2e] w-[176px] items-center justify-center self-start font-[600] h-[48px] rounded-[24px]">
                                        <p className="capitalize span-green text-[20px] font-medium"> vegan option</p>
                                    </div>
                                </Plan>
                                <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"bulking"} 
                                    plans={[{plan_text:"vegan lean bulk",price:"$14.99"},{plan_text:"vegan standardized bulk",price:"$14.99"}]}>
                                        <div className="flex relative bg-[#2e2e2e] w-[176px] items-center justify-center self-start font-[600] h-[48px] rounded-[24px]">
                                        <p className="capitalize span-green text-[20px] font-medium"> vegan option</p>
                                    </div>
                                </Plan>
                        </div>
                    </div>
                </section>

                <section className="relative bg-[#101010] h-[854px] flex flex-col items-center">
                    <div className="relative top-[40px] h-[109px]">
                        <p className="text-[40px] capitalize font-bold ">combination packages</p>
                        <p className="text-[16px] font-medium">Save with these complete <span className="span-green">nutrition  + training</span> bundle for maximum results</p>
                    </div>

                    <div className="relative flex flex-row items-center jutify-center top-[221px] gap-4">
                        <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"weight loss"} plans={[
                            {plan_text:"mid weight loss",price:"$14.99"},
                            {plan_text:"standard weight loss",price:"$14.99"},
                            {plan_text:"accelerated weight loss",price:"$14.99"}]} />
                        <Plan className="w-[514px] h-[441px] rounded-[20px] bg-[#1B1B1BCC]" title={"bulking"} plans={[
                            {plan_text:"lean bulk",price:"$14.99"},
                            {plan_text:"standardized bulk",price:"$14.99"}]} />
                    </div>
                </section>
            
            </main>
        </div>
    )
}