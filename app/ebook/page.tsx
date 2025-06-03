import Link from "next/link";
import Image from "next/image";
import FAQ from "../ui/components/faq";

export default function Page() {
  const questions = [
    "Can i get buff in a week?",
    "Will you come to my house"
  ]
  
    return (
      <div className="relative min-h-screen min-w-screen ">
        <main className=" relative flex flex-col">
  
          <section id="hero" className="relative h-[835px]">
            
            <Image className="-z-10 object-cover lg:top[-100px]" alt="background" fill={true} src={'/images/bg2.png'}/>
  
            <div className="flex flex-row w-screen gap-16">
  
              <div className="ml-28">
  
                <Image className="mt-14" height={73} width={172} alt="logo" src={'/images/logo.svg'}/>
  
                <div className="flex flex-col mt-40 gap-8 w-[580px] h-[220px]">
  
                  <h1 className=" text-7xl font-bold text-white ">HOW I LOST <span className="span-green">23kg</span> IN <span className="span-green">7 MONTHS</span></h1>
                  <h3 className="text-white font-medium text-xl">My complete transformation journey with all the strategies, challenges, and lessons learned along the way with actionble content </h3>
                  <Link href={""} className="w-[197px] h-[52px] btn-gradient text-[16px]">$9.99 - BUY NOW</Link>
  
                </div>
              </div>

                <div className=" relative h-[760px] w-[673px] mt-20 lg:left[100px] ">
                    <Image className="top-[150px]" fill alt="ebook" src={'/images/ebook.png'}/>
                </div>
  
            </div>
  
          </section>

        <section className="flex flex-col h-[794px] items-center justify-center bg-[#050505]">
          <div className="relative flex flex-col items-center justify-center text-white text-[16px] w-[794px] h-[297px] rounded-[14.35px] ring-[0.3px] ring-(--theme-green)" id="glute">
                <Image alt="background" className="rounded-[14.35px]" fill={true} src={'/images/frame4.png'}/>
                <Image src={'play.svg'} alt="play" height={32} width={32}/>
            </div>
        </section>

          <section className="relative flex flex-col bg-[#151515] h-[660px] text-white items-center">
            <h1 className="my-10 capitalize text-[40px] font-bold">See Before and after</h1>

            <div className="relative rounded-2xl bg-gradient-black flex flex-row h-[458px] w-[812px] gap-4">
              
              <div className="relative w-[470px] rounded-2xl overflow-clip">
                <Image className="rounded-2xl overflow-hidden" src={'/images/progress.jpg'} alt="progress image" fill />
              </div>

              <div className=" left-[539px] flex flex-row items-center justify-center gap-2">
                <p className="text-[24px] italic">See After</p>
                <Image src={"ArrowCircleRight.svg"} alt={"check circle"} height={32} width={32} />
              </div>

            </div>

          </section>

          <section className="relative bg-[#161F17] flex flex-col h-[476px] gap-4 w-screen items-center">
          <h1 className="text-white text-[40px] font-bold my-8 capitalize">What you&apoos;ll learn</h1>
            {questions.map((question,index) => <Link key={index} href={""} className="flex items-center gap-2.5 w-[670px] h-[64px] rounded-[14.35px] bg-[#2E2E2E6B] py-4 px-[35px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E2E2E2" stroke-width="2" />
                <path d="M8 12L11 15L16 9" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="font-['Plus Jakarta Sans'] text-[24px] font-[400] leading-[69px] tracking-[0px] text-[#E2E2E2]">{question}</span>
            </Link>)}
          </section>

             <section className="relative py-[40px] flex flex-col bg-[#101010] justify-center items-center text-white">
          
                <h1 className="text-[40px] font-bold my-[40px]">Client&apos;s <span className="span-green">Review</span></h1>
  
                <div className="flex flex-row my-8 gap-4 relative">

            <button className="absolute left-[-120px] top-[50%] transform -translate-y-1/2 bg-[#333333] hover:opacity-80 rounded-2xl p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
            <div className="flex flex-row gap-4">
              <div className="resources-info w-[442px] h-[446px]">
                <div id="client" className="relative flex flex-col justify-center items-center w-[408px] h-[267px] -top-4">
                  <Image className=" rounded-[20px] object-cover ring ring-(--theme-green)" fill src={'/images/client1.jpg'} alt="client"/>
                </div>
                <div className="flex flex-col items-start top-[355px] w-[408px] text-start">
                  <p className="w-[172px] p-3 text-2xl uppercase">-Sarah, 34</p>
                  <p className="w-[354px] text-[14px] font-[400]">Testimonial ipsum dolor sit  amet, consectetur adipisicing  elit. Autem dolore, alias, num quam enim ab voluptate id q uam harum</p>
                </div>
              </div>
              
              <div className="resources-info w-[442px] h-[446px]">
                <div id="client" className="relative flex flex-col justify-center items-center w-[408px] h-[267px] -top-4">
                  <Image className=" rounded-[20px] object-cover ring ring-(--theme-green)" fill src={'/images/client2.jpg'} alt="client"/>
                </div>
                <div className="flex flex-col items-start top-[355px] w-[408px] text-start">
                  <p className="w-[172px] p-3 text-2xl uppercase">-Sarah, 34</p>
                  <p className="w-[354px] text-[14px] font-[400]">Testimonial ipsum dolor sit  amet, consectetur adipisicing  elit. Autem dolore, alias, num quam enim ab voluptate id q uam harum</p>
                </div>
              </div>
            </div>
          
            <button className="absolute right-[-100px] top-[50%] transform -translate-y-1/2 bg-[#333333] hover:opacity-80 rounded-2xl p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex flex-row gap-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          </section>

          <section className="relative bg-[#101010] flex flex-col h-[476px] gap-4 w-screen items-center">
            <h1 className="text-white text-[40px] font-bold my-8">Frequently Asked Questions</h1>
            {questions.map((question,index) => <FAQ key={index} question={question}  />)}
          </section>
          </main>  
        </div>
    )
}