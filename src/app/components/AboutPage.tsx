import Image from "next/image";
import { DownloadIcon, FacebookIcon } from "../icons";

export default function AboutPage() {
  return (
    <>
      <div className="flex justify-between items-center md:gap-10 mt-20">
        <div className="md:w-[648px] w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <h1 className="md:text-7xl text-4xl font-semibold">
                {` Hello, I'm`}
                <br />
                {`Hoc Vu`}
              </h1>
              <Image
                src="/avatar.png"
                width={536}
                height={636}
                alt=""
                className="md:hidden rounded-3xl w-[40%]  shadow-lg"
              />
            </div>
            <p>
              {`I'm a Web Developer based in Hanoi, Vietnam.`}
              <br />
              {`I strives to build immersive and beautiful web applications 
          through carefully crafted code and user-centric design.`}
            </p>
            <button className="bg-purple-500 text-white rounded px-6 py-3 hover:opacity-80 w-32">
              Say Hello!
            </button>
          </div>
          <div className="grid grid-cols-3 text-center bg-[#EDD8FF] rounded-md md:mt-40 mt-8">
            <div className="my-4">
              <h3 className="text-gray-700">
                {new Date().getFullYear() - 2019}+ Y.
              </h3>
              <p>Experience</p>
            </div>
            <div className="border-x-2 border-white py-4">
              <h3 className="text-gray-700">50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="my-4">
              <h3 className="text-gray-700">30+</h3>
              <p>Happy Client</p>
            </div>
          </div>
        </div>
        <Image
          src="/avatar.png"
          width={536}
          height={636}
          alt=""
          className="hidden md:block rounded-3xl w-[536px] h-[636px] shadow-lg"
        />
      </div>
      <div
        id="about"
        className="flex justify-between items-center gap-32 shadow-xl md:p-28 p-4 md:mt-[230px] mt-[30px] mb-[90px] md:bg-white bg-slate-100 rounded-2xl"
      >
        <div className="md:block hidden md:w-[424px] flex-1">
          <Image
            src={"/avatar.png"}
            alt=""
            width={424}
            height={468}
            className=""
          />
          {/* <div className="flex justify-center items-center p-3">
            <FacebookIcon />
          </div> */}
        </div>
        <div className="flex-1">
          <h3 className="md:text-[38px]">
            I am Professional
            <br /> Web Developer
          </h3>
          <br />
          <p>
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <br />
          <p>
            I design and develop services for customers specializing creating
            stylish, modern websites and web services.
          </p>
          <br />
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="bg-purple-500 text-white px-6 py-3 rounded border border-purple-500 font-bold">
              My Projects
            </button>
            <button className="text-purple-500 border border-purple-500 px-6 py-3 rounded font-bold flex justify-center">
              <DownloadIcon width={24} height={24} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
