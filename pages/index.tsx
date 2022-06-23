import type { NextPage } from 'next'
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from "next-seo";
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';
import ContactForm from "../components/contact-form";

const Home: NextPage = () => {
    
  return (
    <>
      <NextSeo
        title="Noémie Dufresne - Official Site"
        description="Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life."
        canonical="https://noemiedufresne.com/"
      />
      <div className="bg-black/50">
        <div className="relative h-screen flex justify-center items-center px-6 py-4 md:p-10">
          <Image
            className="-z-50"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            priority
            src="/images/background.jpg"
          />
          <div className="z-10 w-full md:w-72 h-full flex flex-col items-center justify-between text-center text-xl md:text-5xl font-extrabold text-white">
            <div className="z-10 h-40 w-40 md:h-56 md:w-56 relative border-4 border-fuchsia-600 rounded-full">
              <Image
                src={'/images/avatar.jpg'}
                layout="fill"
                objectPosition="top"
                objectFit="cover"
                className="z-10 rounded-full bg-fuchsia-600"
                priority
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-6xl autobiography'>Noémie</h2>
              <h3 className='text-sm md:text-3xl'>DUFRESNE</h3>
            </div>
            <div className='flex space-x-3'>
              <div className='bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer'><Link href="https://www.instagram.com/noemie.dufresne"><span><BsInstagram /></span></Link></div>
              <div className='bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer'><Link href="https://twitter.com/dufresnenoemie1"><span><BsTwitter /></span></Link></div>
              <div className='bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer'><Link href="https://www.tiktok.com/@noemie_dufresne"><span><FaTiktok /></span></Link></div>
            </div>
            <div className='flex items-center space-x-4 w-full justify-center bg-white text-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer'>
              <div className='text-2xl md:text-5xl'><Link href="https://onlyfans.com/noemiedufresne"><span><SiOnlyfans /></span></Link></div>
              <div className='text-lg md:text-xl'>Onlyfans</div>
            </div>
            <div className='flex items-center space-x-4 w-full justify-center bg-white text-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer'>
              <div className='text-lg md:text-xl'><Link href="https://mym.fans/Noemiedufresne">MYM</Link></div>
            </div>
            <p className='text-[12px] leading-3 lg:text-xs text-justify'>Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life.</p>
            <label htmlFor="my-modal-3" className="text-lg md:text-xl bg-fuchsia-600 w-full py-2 md:py-5 rounded-full cursor-pointer">Collaboration</label>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
