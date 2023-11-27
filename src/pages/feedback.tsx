import { Inter } from "next/font/google";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function Feedback() {
  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center bg-white p-4 ${inter.className}`}
    >
      <div className="w-full max-w-xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdoFwiuGHW4dlRKegPiZoOKZ-0yMxjnX1CgZPRwiAimqoOlOw/viewform?embedded=true"
          width="100%"
          height="100%"
          style={{ minHeight: "500px", height: "80vh" }}
          loading="lazy"
        >
          Loading form feedback…
        </iframe>
      </div>
      <NavigationButton path={"/home"} buttonName={"Home"} />
    </main>
  );
}
