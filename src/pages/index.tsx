import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { parseCookies } from "nookies";
import LandingImage from "@/assets/landing-image.png";
import NavigationButton from "@/components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const buttonStartText = "Start Your Quest - Become a Recycling Hero Today!";

  return (
    <main
      className={`flex flex-col min-h-screen items-center max-w-4xl mx-auto justify-center bg-white p-4 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-600">
          RecycleQuest: Embark on a Green Adventure!
        </h1>
        <p className="mt-4 text-md md:text-lg text-black-700">
          Welcome to RecycleQuest, where learning to recycle becomes an exciting
          journey! Dive into a world of interactive gameplay where sorting waste
          correctly earns you points and unlocks new levels.
        </p>
      </div>
      <div className="my-8">
        <Image
          src={LandingImage}
          alt="RecycleQuest Game"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>
      <NavigationButton path={"/login"} buttonName={buttonStartText} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userToken = cookies.token;

  if (userToken) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
