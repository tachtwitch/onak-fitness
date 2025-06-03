import Image from "next/image";
import Link from "next/link";
import FAQ from "./ui/components/faq";
import Card from "./ui/components/card";

const info = [
  {
    id:"1",
    description:"Make sure to complete the survey, so I can see what your goals are.",
    text:"Complete the form"
  },
  {
    id:"2",
    description:"Once you submit, I'll review your application and if it's a good fit I'll reach out to you via text.",
    text:"Wait to be contacted"
  },
  {
    id:"3",
    description:"If you're a good fit I'll make sure that you have a spot to join Swole University!",
    text:"You are all set"
  }
]

const questions = [
  "Can i get buff in a week?",
  "Will you come to my house"
]

export default function Home() {
  return (
    <div className="relative min-h-screen min-w-screen ">
      <main className=" relative flex flex-col">

        <section id="hero" className="relative">
          
          <Image className="-z-10" alt="background" fill={true} src={'/images/frame4.png'}/>

          <div className="flex flex-row w-screen gap-16">

            <div className="ml-28">

              <Image className="mt-14" height={73} width={172} alt="logo" src={'/images/logo.svg'}/>

              <div className="flex flex-col mt-40 gap-8 w-[580px] h-[220px]">

                <h1 className=" text-7xl font-bold text-white ">Build <span className="span-green">different</span></h1>
                <h3 className="text-white font-medium text-xl">Together, We'll transform your body with custom workout plans and personalized coaching that get results </h3>
                <Link href={""} className="w-[268px] h-[52px] btn-gradient">Start Your Journey</Link>

              </div>
            </div>

            <div className="object-contain mt-20 lg: left-[830px]">
              <Image height={600} width={300} alt="model" src={'/images/model.svg'}/>
            </div>

          </div>

        </section>

        <section className="flex flex-col h-[327px] bg-[#161F17] items-center justify-center ">
          <div className="flex flex-col text-white items-center">
            <p className="font-bold text-[40px]">1 - on -1 Coaching</p>
            <p className="font-medium text-[16px]">Premium personlized coaching to help you achieve your fitness goals.</p>
            <p className="font-medium text-[16px]">Get a custom plan deigned specifically for your body and lifestyle</p>
          </div>
        </section>

        <section className="relative flex flex-col bg-[#050505] ">

            <section className="relative flex flex-col h-[576px] items-center justify-center">
              <div className="relative h-[379px] flex flex-col gap-8">
                {info.map((info,index) => 
                    <div key={index} className="info-block">
                      <span className="anak-span">{info.id}</span>
                      <div className="flex flex-col ml-[55.35px] self-center justify-center">
                        <p className="font-bold text-2xl">{info.text}</p>
                        <p className="font-medium text-xs/[20px]">{info.description}</p>
                      </div>
                    </div>
                )}
              </div>
            </section>

            <section className="relative flex flex-col items-center justify-center text-white gap-[80px] h-[555.32px]">

              <h1 className="text-[40px] font-bold">Signup for my <span className="span-green">coaching</span> here</h1>

              <div className="relative flex flex-col items-center justify-between w-[670px] h-[285.32px]">

                <h1 className="text-2xl font-medium">What is your primary fitness goal?</h1>

                <div className="flex flex-col ] items-center justify-center gap-4 h-[141.32px]">

                  <div className="relative flex flex-row gap-[7.17px] ">
                    <Link href={''} className="coaching-link"><p>Weight Loss</p></Link>
                    <Link href={''} className="coaching-link bg-[#c3c3c3] text-[#151515]"><p>Build muscle</p></Link>
                  </div>

                  <Link href={''} className="coaching-link"><p>Healthy lifesytle</p></Link>
                  
                </div>

                <div className="relative flex flex-row w-[276] h-[46px]  items-center justify-between ">
                  <button className="btn-coaching" type="button">Previous</button>
                  <button className="btn-coaching bg-black" type="button">Next</button>
                </div>
              </div>

            </section>
        </section>

            <section className="relative flex flex-row bg-(--bg-black) w-full h-[899px] gap-8">

              {/* text */}
              <div className="relative left-34 h-[516px] w-[404px] items-start top-[166px]">
                <h1 className=" text-[40px] font-bold text-white mb-8">What you get with <br /><span className="span-green">1-on-1 training</span></h1>

                <ul className="flex flex-col h-[376px] w-[381px] text-white items-center gap-4">

                  <li>
                    <p className="ul-header-text">Workout plans made for you</p>
                    <p className="ul-caption">Whatever your experience level I'll create the plan 
                    fit for you to win!</p>
                  </li>
                  <li>
                    <p className="ul-header-text">Your own meal plan</p>
                    <p className="ul-caption">You'll get a customized meal plan based on your 
                    specific fitness goals</p>
                  </li>
                  <li>
                    <p className="ul-header-text">We track your progress together</p>
                    <p className="ul-caption">Weekly check-ins to make sure that you're on 
                    track and progressing</p>
                  </li>
                  <li>
                    <p className="ul-header-text">Continuous communication</p>
                    <p className="ul-caption">Anytime, you'll have a direct place to chat with ya boy!</p>
                  </li>
                </ul>
              </div>

              <div className="relative top-[50px] h-[780px] w-[780pc]">
                <Image fill alt="phone" src={'/images/iPhone.jpg'} />
              </div>

            </section>

            <section className="relative flex flex-col bg-[#101010] h-[739px] items-center text-white">

              <h1 className=" capitalize mt-20 text-[40px] font-bold ">Free <span className="span-green">resources</span></h1>
              <p className="ul-caption">Tools to get you started on your fitness journey - no strings attached.</p>

              <div className="flex flex-row my-8 gap-4">
                <div className="resources-info">
                    <div className="relative flex flex-col justify-center items-center w-[143px] h-[143px]">
                      <Image height={116} width={98.31} src={'/images/calc.svg'} alt="calculator"/>
                    </div>
                  <p>Calorie <br />Calculator</p>
                </div>
                <Card>
                  <div className="relative flex flex-col items-center justify-center w-[143px] h-[143px]">
                      <Image height={89.38} width={143} src={'/images/dumbell.svg'} alt="dumbell"/>
                    </div>
                  <p>Free Workout <br />Program</p>
                </Card>
              </div>
            </section>

            <section className="relative flex flex-col bg-[#151515] h-[660px] text-white items-center">
              <h1 className="my-10 capitalize text-[40px] font-bold">Transformation Picture</h1>

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

            <section className="relative flex flex-row bg-[#151515] h-[762px] text-white items-center justify-center gap-10">

              <div className="relative bg-gradient-black flex flex-col items-center h-[592px] justify-center p-4 pb-0">
                <Image  src={'/images/onaks.jpg'} alt="fitness journey" width={422} height={590}/>
              </div>

                <div className="relative flex flex-col gap-6">
                  <h1 className=" uppercase text-[24px] text-white font-bold">My <span className="span-green">Fitness</span> Journey</h1>
                  <div className="relative fint-medium flex flex-col gap-4 text-[24px]/[32px] text-white h-[434px] w-[580px]">
                    <p>My fitness journey began when I hit <span className="span-green">101kg</span> and 
                      realized I needed to a change. Through dedication, 
                      proper nutrition, and consistent training, 
                      I lost <span className="span-green">23kg</span> in just <span className="span-green">7 months</span></p>

                      <p>This experience taught me what works and 
                      what doesn't in the real world. I've since dedicated 
                      to helping other achieve similar transformations 
                      through personalized coaching</p>

                      <p>I believe in sustainable approaches to fitness 
                      that create lasting results - <span className="span-green">no quick fixes</span>, 
                      just proven methods that I've used myself and 
                      with dozens of successful clients</p>
                  </div>
                </div>

            </section>

              <section className="relative py-[40px] flex flex-col bg-[#101010] justify-center items-center text-white">
              
                    <h1 className="text-[40px] font-bold my-[40px]">Client's <span className="span-green">Review</span></h1>
      
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
  );
}
