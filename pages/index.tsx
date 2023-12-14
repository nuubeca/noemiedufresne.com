import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import ApplicationForm from "../components/ApplicationForm";
import ContactForm from "../components/ContactForm";
import VoteForm from "../components/VoteForm";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Noémie Dufresne - Official Site"
        description="Content creator for the past ten years, Noémie Dufresne stands out for the originality of her various concepts and the quality of her content. Her avant-garde style and lifestyle perfectly represent the glamour of everyday's life."
        canonical="https://noemiedufresne.com/"
      />
      <div className="bg-black/50">
        <div className="relative min-h-screen flex justify-center items-center px-6 py-4 md:p-10">
          <Image
            alt="background"
            className="-z-50"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            priority
            src="/images/bg2024.jpeg"
          />
          <div className="z-10 w-full md:w-72 h-full flex flex-col space-y-6 items-center text-center text-white">
            <div>
              <h2 className="text-7xl md:text-9xl autobiography">Noémie</h2>
              <h3 className="text-md md:text-3xl">DUFRESNE</h3>
            </div>
            <div className="flex space-x-3">
              <div className="bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer">
                <Link href="https://www.instagram.com/noemie.dufresne">
                  <span>
                    <BsInstagram size={35} />
                  </span>
                </Link>
              </div>
              <div className="bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer">
                <Link href="https://twitter.com/dufresnenoemie1">
                  <span>
                    <BsTwitter size={35} />
                  </span>
                </Link>
              </div>
              <div className="bg-fuchsia-600 p-2 md:p-4 rounded-full cursor-pointer">
                <Link href="https://www.tiktok.com/@noumyofficiel?_t=8XXZdFxfMzV&_r=1">
                  <span>
                    <FaTiktok size={35} />
                  </span>
                </Link>
              </div>
            </div>
            <div className=" border-2 border-fuchsia-600 text-lg md:text-xl w-full bg-black text-fuchsia-600 p-3 md:p-1  rounded-full cursor-pointer">
              <Link href="https://noumyofficialshop.com/">
                <div className="flex justify-center items-center space-x-4">
                  Calendrier 2024 &<br className="hidden md:block" />
                  Promo exclusive
                </div>
              </Link>
            </div>
            <div className="text-md md:text-lg w-full font-extrabold  bg-white text-fuchsia-600 p-2 md:p-3 rounded-full cursor-pointer">
              <Link href="https://onlyfans.com/noemiedufresne">
                <div className="flex flex-col justify-center items-center space-x-4 text-md">
                  <img src="/images/onlyfans.svg" className=" w-32" />
                </div>
              </Link>
            </div>
            <div className=" text-lg md:text-xl  w-full  bg-white text-fuchsia-600 p-3 md:p-4 rounded-full cursor-pointer">
              <Link href="https://mym.fans/Noemiedufresne">
                <div className="flex justify-center items-center space-x-4">
                  <img src="/images/mym.svg" className=" w-14" />
                  {/* <span>MYM</span> */}
                </div>
              </Link>
            </div>
            <p className="text-[12px] leading-3 lg:text-xs text-justify">
              Content creator for the past ten years, Noémie Dufresne stands out
              for the originality of her various concepts and the quality of her
              content. Her avant-garde style and lifestyle perfectly represent
              the glamour of everyday's life.
            </p>
            <label
              htmlFor="my-modal-3"
              className="text-lg md:text-xl bg-fuchsia-600 w-full py-2 md:py-5 rounded-full cursor-pointer"
            >
              Collaboration
            </label>
          </div>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* This function is temporarily unavailable. */}
            <ContactForm />
          </div>
        </div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* This function is temporarily unavailable. */}
            <ApplicationForm />
          </div>
        </div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* This function is temporarily unavailable. */}
            <VoteForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
