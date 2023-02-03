import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ResultDescription } from "../../components/ResultDescription";
import { ResultHeader } from "../../components/ResultHeader";
import { api } from "../../utils/api";
import Head from "next/head";

const MoviePage = () => {
  const router = useRouter();
  const id = useMemo(() => parseInt(router.query.id as string), [router.query]);

  const { data, status } = api.tmdb.movie.useQuery(id, {
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
          <title>{data.title} | Now Streaming</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ResultHeader
          id={id}
          type="movie"
          title={data.title}
          poster_url={data.poster_path}
          release={data.release_date}
        >
          {/* <p className="text-gray-400 text-sm">
            Genres: Action, Adventure, Sci-Fi
          </p> */}
          <p className="text-sm text-gray-400">
            Runtime: {data.runtime} minutes
          </p>
        </ResultHeader>

        <ResultDescription overview={data.overview} />
      </>
    );
  }
};

export default MoviePage;
