export default function Page(){
    const terms = [
        { title: "1. Eligibity", caption: "You must be at least 18 years old or have permission from a legal guardian to use our Services.\n By using Onaks Fitness, you confirm you meet this requirement." },
        { title: "2. how we use it", caption: "To deliver services, improve workouts, send updates and ensure a great experience.\n We never sell your data." },
        { title: "3. Third-party sharing", caption: "Only shared with essential providers (like payment processors). No unauthorized access." },
        { title: "4. your rights", caption: "You can access, correct, or request deletion of your data. Contact us any time at hello@onaksfitness.com" },
        { title: "5. cookies", caption: "We use cookies to analyze traffic and enhance user experience. You can opt out via browser settings." },
        { title: "6. policy updates", caption: "We update this policy occasionally. Changes will be posted here with a new effective date." },
      ];
    return(
        <div className="relative min-h-screen min-w-screen ">
            <main className=" relative flex flex-col">
                <section className="flex flex-col h-[327px] bg-[#161F17] items-center justify-center gap-4">
                    <div className="flex flex-col text-white text-center items-center">
                        <p className="font-bold text-[40px]">Privacy Policy</p>
                        <p className="font-medium text-[16px]">Your privacy is important to us.Learn how we collect, Use and protect your data.</p>
                    </div>
                </section>

                <section className="relative flex flex-col justify-center bg-[#151515] items-center h-[786px]">
                    <div className="flex w-[656px] text-white h-[634px] items-center justify-center">
                        <ul className=" space-y-4">
                            {terms.map((term, index) => (
                            <li key={index} className="space-y-2">
                                <h2 className="capitalize text-[24px] font-bold">{term.title}</h2>
                                <p className="text-[16px] font-medium">{term.caption}</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
        )
    }