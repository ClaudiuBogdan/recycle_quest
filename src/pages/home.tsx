import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { destroyCookie, parseCookies } from "nookies";
import { fetchUser } from "@/adapters/api/fetchData";
import FullScreenButton from "@/components/FullScreenButton";
import NavigationButton from "@/components/NavigationButton";
import { UserData } from "@/models/User";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  user: UserData;
}

export default function Home({ user }: HomeProps) {
  const tutorialText = "Tutorial";
  const newGameText = "New Game";
  const leaderboardText = "Leaderboard";
  const infoText = "Info";
  const feedbackText = "Feedback";

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center space-y-6 bg-white p-8 ${inter.className}`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">
        Welcome to RecycleQuest,{" "}
        <span className="text-green-800">{user.nickname}!</span>
      </h1>
      <div className={"max-w-2xl"}>
        <NavigationButton path={"/tutorial"} buttonName={tutorialText} />
        <NavigationButton path={"/game"} buttonName={newGameText} />
        <NavigationButton path={"/leaderboard"} buttonName={leaderboardText} />
        <NavigationButton path={"/information"} buttonName={infoText} />
        <NavigationButton path={"/feedback"} buttonName={feedbackText} />
        <FullScreenButton />
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userToken = cookies.token;
  const redirectData = {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
  if (!userToken) {
    return redirectData;
  }
  const user = await fetchUser(userToken);
  if (!user) {
    destroyCookie(context, "token", {
      httpOnly: true, // Secure cookie, not accessible via JavaScript
      secure: process.env.NODE_ENV !== "development", // Use secure in production
      sameSite: "strict", // CSRF protection
      path: "/",
    });
    return redirectData;
  }
  return {
    props: {
      user,
    },
  };
};
