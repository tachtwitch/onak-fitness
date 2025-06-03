'use client'
import React, { useState } from 'react';

export default function ContactUs(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({
        firstName,
        lastName,
        phone,
        email,
        message,
      });
    };
  
    return(
        <div className="relative min-h-screen min-w-screen ">
            <main className=" relative flex flex-col">
                <section className="flex flex-col h-[327px] bg-[#161F17] items-center justify-center ">
                    <div className="flex flex-col text-white text-center items-center">
                        <p className="font-bold text-[40px]">Contact Us</p>
                        <p className="font-medium text-[16px]">By accessing or using our website, services,
                             content, and programs (collectively, the <br/>“Services”), 
                            you agree to be bound by the following Terms of Service. If you do not <br/>agree, please do not use our services.</p>
                    </div>
                </section>

                <section className="resource-info w-full h-[762px] bg-[#151515] flex items-center justify-center">
                    <form onSubmit={handleSubmit} className=" justify-around h-[602px] flex text-[#c3c3c3] text-[16px] font-[400] flex-col space-y-4 bg-[#1b1b1b] rounded-[20px] p-4">
                        <div className="flex flex-row space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="mb-2 text-sm">First Name</label>
                            <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="p-2 border border-[var(--theme-green)] w-[339px] h-[61px] bg-[#2e2e2e] rounded"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="mb-2 text-sm">Last Name</label>
                            <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="p-2 border border-[var(--theme-green)] w-[339px] h-[61px] bg-[#2e2e2e] rounded"
                            />
                        </div>
                        </div>
                        <div className="flex flex-row space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="mb-2 text-sm">Phone</label>
                            <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="p-2 border border-[var(--theme-green)] w-[339px] h-[61px] bg-[#2e2e2e] rounded"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="mb-2 text-sm">Email</label>
                            <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 border border-[var(--theme-green)] w-[339px] h-[61px] bg-[#2e2e2e] rounded"
                            />
                        </div>
                        </div>
                        <div className="flex flex-col">
                        <label className="mb-2 text-sm">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-2 border border-[var(--theme-green)] bg-[#2e2e2e] rounded-[14px] h-40"
                        />
                        </div>
                        <button
                        style={{
                            background: 'linear-gradient(270deg, #00EB2B -16.98%, #00A0FB 85.26%)'
                        }}
                        type="submit"
                        className=" text-[24px] font-medium text-white font-bold py-2 px-4 rounded"
                        >
                        Submit
                        </button>
                    </form>
                </section>
            </main>
        </div>
    )
}