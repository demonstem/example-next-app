import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen center">
      <h1 className="text-5xl">Chanatip Pattanapen</h1>
    </div>
  );
}
