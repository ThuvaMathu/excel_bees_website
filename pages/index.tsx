import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "@/src/assets/eb_logo_720.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-12 ${inter.className}`}
    >
      <div className=" py-10 px-24  flex justify-center flex-col items-center min-w-80  shadow-md shadow-gray-300 rounded-2xl  ">
        <div className=" w-48 h-16 relative ">
          <Image fill src={logo} alt="" />
        </div>
        <p className=" mt-6 font-semibold text-3xl text-gray-900  ">
          Comming Soon ...
        </p>
      </div>
    </main>
  );
}
