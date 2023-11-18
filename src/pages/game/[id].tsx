import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function EndGamePage() {
  const router = useRouter();
  const { id: gameId } = router.query;

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center space-y-6 bg-white p-8 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-green-600">Game ended</h1>

      <p>Game ID: {gameId}</p>
      <NavigationButton path={"/home"} buttonName={"Home"} />
    </main>
  );
}
