import dayjs from 'dayjs';
import { Film } from 'lucide-react';
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ResultDescription } from '../../components/ResultDescription';
import { ResultHeader } from '../../components/ResultHeader';
import { api } from '../../utils/api'

const MoviePage = () => {
  const router = useRouter();
  const id = useMemo(() => parseInt(router.query.id as string), [router.query]);

  const { data, status } = api.tmdb.movie.useQuery(id, {
    enabled: !!id
  });

  if (status === 'loading') {
    return (
      <div className='pt-32'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!!data) {
    return (
      <>
        <ResultHeader
          id={id}
          type='movie'
          title={data.title}
          poster_url={data.poster_path}
          release={data.release_date}
        >
          {/* <p className="text-gray-400 text-sm">
            Genres: Action, Adventure, Sci-Fi
          </p> */}
          <p className="text-gray-400 text-sm">
            Runtime: {data.runtime} minutes
          </p>
        </ResultHeader>

        <ResultDescription
          overview={data.overview}
        />
      </>
    )
  }
}

export default MoviePage