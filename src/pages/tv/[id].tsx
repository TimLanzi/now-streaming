import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ResultDescription } from "../../components/ResultDescription";
import { ResultHeader } from "../../components/ResultHeader";
import { api } from "../../utils/api";

const MoviePage = () => {
  const router = useRouter();
  const id = useMemo(() => parseInt(router.query.id as string), [router.query]);

  const { data, status } = api.tmdb.tvShow.useQuery(id, {
    enabled: !!id,
  });

  if (status === "loading") {
    return (
      <div className="pt-32">
        <Head>
          <title>Loading... | Now Streaming</title>
        </Head>
        <LoadingSpinner />
      </div>
    );
  }

  if (!!data) {
    return (
      <>
        <Head>
          <title>{data.name} | Now Streaming</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ResultHeader
          id={id}
          type="tv"
          title={data.name}
          poster_url={data.poster_path}
          release={data.first_air_date}
        >
          {/* <p className="text-gray-400 text-sm">
            Genres: Action, Adventure, Sci-Fi
          </p> */}
          {/* <p className="text-gray-400 text-sm">
            Runtime: {data.runtime} minutes
          </p> */}
        </ResultHeader>

        <ResultDescription overview={data.overview} />
      </>
    );
  }

  return null;
};

export default MoviePage;
