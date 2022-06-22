import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from "next-seo";
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';
// import Mym from "./mym.svg";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Noémie Dufresne - Official Site"
        description="Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life."
        canonical="https://noemiedufresne.com/"
      />
      <div className="bg-black/50">
        <div className="relative h-screen flex justify-center p-5">
          <Image
            className="-z-10"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            src="/images/background.jpg"
          />
          <div className="z-10 w-64 h-full flex flex-col items-center justify-between text-center text-5xl font-extrabold text-white">
            <div className="h-56 w-56 relative border-4 border-purple-300 rounded-full">
              <Image
                src={'/images/background.jpg'}
                layout="fill"
                objectPosition="top"
                objectFit="cover"
                className="rounded-full bg-red-600 p-6 m-6 border-[30] border-red-600"
              />
            </div>
            <div>
              <h2 className='text-6xl autobiography'>Noémie</h2>
              <h3 className='text-3xl'>DUFRESNE</h3>
            </div>
            <div className='flex space-x-3'>
              <div className='bg-purple-300 p-4 rounded-full cursor-pointer'><Link href="https://www.instagram.com/noemie.dufresne"><BsInstagram /></Link></div>
              <div className='bg-purple-300 p-4 rounded-full cursor-pointer'><Link href="https://twitter.com/dufresnenoemie1"><BsTwitter /></Link></div>
              <div className='bg-purple-300 p-4 rounded-full cursor-pointer'><Link href="https://www.tiktok.com/@noemie_dufresne"><FaTiktok /></Link></div>
            </div>
            <div className='flex items-center space-x-4 w-full justify-center bg-white text-purple-300 p-4 rounded-full cursor-pointer'>
              <div className='text-5xl'><Link href="https://onlyfans.com/noemiedufresne"><SiOnlyfans /></Link></div>
              <div className='text-xl'>Onlyfans</div>
            </div>
            <div className='flex items-center space-x-4 w-full justify-center bg-white text-purple-300 p-4 rounded-full cursor-pointer'>
              {/* <div className='text-5xl'><Mym /></div> */}
              <div className='text-xl'><Link href="https://mym.fans/Noemiedufresne">MYM</Link></div>
            </div>
            <p className='text-xs text-justify'>Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life.</p>
            <button className='text-xl bg-purple-300 w-full py-5 rounded-full cursor-pointer'>Collaboration</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
