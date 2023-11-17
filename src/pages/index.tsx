import { Inter } from "next/font/google";
import Game from "./_game";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Game />
    </main>
  );
}
