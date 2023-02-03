import { type NextPage } from "next";
import Head from "next/head";
import { SearchBar } from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Now Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center px-12 pt-72 md:h-screen md:pt-0">
        <div>
          <h1 className="mb-6 text-center text-5xl font-semibold text-slate-800">
            Welcome to <span className="text-indigo-700">Now Steaming!</span>
          </h1>

          <SearchBar width="full" />
        </div>
      </main>
    </>
  );
};

export default Home;
