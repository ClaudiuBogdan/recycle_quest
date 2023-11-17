import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import TableComponent from "@/components/table/Table";

export default function Leaderboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-16">
      <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
      <p className="text-lg mb-8">Check out the top performers below!</p>
      <div className="w-full max-w-screen-x1">
        <TableComponent />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userToken = cookies.token;

  if (!userToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
