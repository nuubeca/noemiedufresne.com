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
            src="/images/background.jpg"
          />
          <div className="z-10 w-full md:w-72 h-full flex flex-col space-y-6 items-center text-center text-white">
            <div className="z-10 h-40 w-40 md:h-56 md:w-56 relative border-4 border-fuchsia-600 rounded-full">
              <Image
                alt="avatar"
                src={"/images/avatar.jpg"}
                layout="fill"
                objectPosition="top"
                objectFit="cover"
                className="z-10 rounded-full bg-fuchsia-600"
                priority
              />
            </div>
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
            {/* <div>⬇️ click here ⬇️</div>
            <Link href="https://imgur.com/a/f608FoH">
              <img src="/images/blackfriday.svg" className="w-full" />
            </Link> */}
            {/* <label
              htmlFor="my-modal-5"
              className="text-lg md:text-md bg-fuchsia-600 w-full py-2 md:py-5 rounded-full cursor-pointer"
            >
              Vote pour The OnlyOne
            </label> */}
            <div className="text-md md:text-lg w-full font-extrabold  bg-white text-fuchsia-600 p-2 md:p-3 rounded-full cursor-pointer">
              <Link href="https://onlyfans.com/noemiedufresne">
                <div className="flex flex-col justify-center items-center space-x-4 text-md">
                  {/* <span className=" text-rose-400">
                    New <span className="text-black">Free</span> V
                    <span className=" text-black">-</span>DAY{" "}
                    <span className="text-black">video</span> 🌷🎥
                  </span> */}

                  {/* <SiOnlyfans />
                  <span>Onlyfans</span>
                   */}
                  <img src="/images/onlyfans.svg" className=" w-32" />
                </div>
              </Link>
            </div>
            {/* <div>
              <a href="https://fruitz.me/NoemiexFruitz" target="_blank">
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <h2 className=" text-4xl">Fruitz</h2>
                  <img
                    className="rounded-xl w-24"
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/a8/7e/55/a87e55ef-afcc-b7da-4e04-55f29f034dd6/AppIcon-1x_U007emarketing-0-5-0-85-220.png/230x0w.webp"
                  />
                  <img
                    className="w-32"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                  />
                </div>
              </a>
            </div> */}
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
