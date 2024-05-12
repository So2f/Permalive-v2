import Head from "next/head";
import NavBar from "../components/NavBar";
import logo from "../../public/Ethereum.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Truffle Box</title>
        <meta name="description" content="NextJs Truffle Box" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <NavBar />
        <div className="flex">
          <div className="w-1/2">
            <div className="text-white text-6xl font-dmmono font-medium ml-28 mt-16 p-10 space-y-6">
              <p>Recompenser les</p>
              <p>ecoles pour le tri</p>
              <p>des dechets</p>
            </div>
            <div className="text-white font-dmmono text-xl font-thin ml-28 pl-10">
              <p>Marketplace digitalises pour plastique</p>
            </div>

            <div className=" text-white mt-20 ml-28 pl-10">
              <div className="flex items-center space-x-10">
                <Button className="bg-[#0029FF] text-2xl p-8 rounded-xl  hover:bg-purple-600 shadow-xl">
                  Explore
                </Button>
                <p className="text-2xl cursor-pointer inline-block relative group">
                  En savoir plus
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 w-0 group-hover:w-full" />
                </p>
              </div>
            </div>
          </div>
          <div className="relative ml-10">
            <div className="w-1/2 absolute transform -rotate-6 scale-90 mt-48 -ml-4">
              <Card />
            </div>
            <div className="w-1/2 absolute transform rotate-12 mt-12 ml-36">
              <Card />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 mb-24 ml-20 opacity-60">
          <Image src={logo} alt="" width={590} height={95} />
        </div>
      </div>
    </>
  );
}
