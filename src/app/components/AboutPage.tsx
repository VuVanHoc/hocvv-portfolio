import Image from "next/image";
import { DownloadIcon, FacebookIcon } from "../icons";

export default function AboutPage() {
  // const avatarUrl =
  //   "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/269853094_1497705623946432_2539570950698619941_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHo1Kcln734Edp22II9LBGABwEMDomv_McHAQwOia_8x1sVaMF7uWMkS9i8vY4STuSzDwUcFIs6dwuxaPihkfvH&_nc_ohc=gvTQFF5g6eoAb4JFVkT&_nc_ht=scontent.fhan14-5.fna&oh=00_AfCK9wa5jDnHB-frUb5MiqaKyMSwdVyH1fWQUf5mdwo8yA&oe=661DF1AA";

  const avatarUrl = "/avatar.png";

  return (
    <>
      <div className="flex justify-between items-center md:gap-10 mt-20 md:mt-32">
        <div className="md:w-[648px] w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <h1 className="xl:text-7xl md:text-5xl text-4xl font-semibold">
                {` Hello, I'm`}
                <br />
                {`Hoc Vu`}
              </h1>
              <Image
                src={avatarUrl}
                width={536}
                height={636}
                alt=""
                className="md:hidden rounded-3xl w-[40%] shadow-lg"
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
          <div className="grid grid-cols-3 text-center bg-[#EDD8FF] rounded-md xl:mt-40 mt-8">
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
          src={avatarUrl}
          width={536}
          height={636}
          alt=""
          className="hidden md:block rounded-3xl xl:w-[536px] w-1/2 aspect-[536/636] shadow-lg"
        />
      </div>
      <div
        id="about"
        className="flex justify-between items-center xl:gap-32 gap-12 shadow-xl xl:p-28 md:p-8 p-4 xl:mt-[230px] md:mt-[70px] mt-[30px] mb-[90px] xl:bg-white bg-slate-100 rounded-2xl"
      >
        <div className="md:block hidden md:w-[424px] flex-1">
          <Image src={avatarUrl} alt="" width={424} height={468} className="" />
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
            <button className="bg-purple-500 text-white xl:px-6 xl:py-3 px-2 rounded border border-purple-500 font-bold">
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
