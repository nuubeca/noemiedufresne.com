import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import ApplicationForm from "./components/ApplicationForm";
import VoteForm from "./components/VoteForm";

export default function Home() {
  return (
    <>
      <div className="bg-black/50">
        <div className="relative min-h-screen flex justify-center items-center px-6 py-4 md:p-10">
          <Image
            alt="background"
            className="-z-50"
            fill
            style={{ objectPosition: "top", objectFit: "cover" }}
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
            <div className="text-md md:text-lg w-full font-extrabold  bg-white text-fuchsia-600 p-2 md:p-3 rounded-full cursor-pointer">
              <Link href="https://onlyfans.com/noemiedufresne">
                <div className="flex flex-col justify-center items-center space-x-4 text-md">
                  <img src="/images/onlyfans.svg" className=" w-32" alt="OnlyFans" />
                </div>
              </Link>
            </div>
            <div className=" text-lg md:text-xl  w-full  bg-white text-fuchsia-600 p-3 md:p-4 rounded-full cursor-pointer">
              <Link href="https://mym.fans/Noemiedufresne">
                <div className="flex justify-center items-center space-x-4">
                  <img src="/images/mym.svg" className=" w-14" alt="MYM" />
                </div>
              </Link>
            </div>
            <div className=" border-2 border-fuchsia-600 text-lg md:text-xl w-full bg-black text-fuchsia-600 p-3 md:p-1  rounded-full cursor-pointer">
              <Link href="https://vimeo.com/932945766/67960b6838?share=copy">
                <div className="flex justify-center items-center space-x-4">
                  A little surprise for you <br />
                  (free video)
                </div>
              </Link>
            </div>
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
            <VoteForm />
          </div>
        </div>
      </div>
    </>
  );
}

