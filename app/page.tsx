import { link } from "fs";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <h1>Hello World</h1>
        <a href="/post" className="text-fuchsia-700">
          sangkul
        </a>
      </div>
    </>
  );
}
