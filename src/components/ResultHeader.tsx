import React, { type PropsWithChildren } from 'react'
import dayjs from 'dayjs';
import { Film, Tv } from 'lucide-react';
import { api } from '../utils/api';

type Props = {
  id: number;
  type: 'movie' | 'tv';
  title: string;
  poster_url: string | null;
  release: string;
} & PropsWithChildren;

export const ResultHeader: React.FC<Props> = ({
  id,
  type,
  title,
  poster_url,
  release,
  children
}) => {
  const { data: providers, isLoading } = api.tmdb.providers.useQuery({
    id,
    type,
  }, {
    enabled: !!id,
  });

  return (
    <div className="pt-48 md:pt-36 bg-gray-900 p-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-white font-bold text-4xl">
            {title}
          </h1>
        </div>
        <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-12 md:space-x-24 lg:space-x-52 mt-8'>
          <div className="flex flex-col items-center sm:items-start">
            { !!poster_url ? (
              <img
                className="w-64"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_url}`}
                alt={`${title} Poster`}
              />
            ) : (
              <div className='max-w-xs flex items-center justify-center h-52'>
                { type === 'movie' ? (
                  <Film className='stroke-white' size="50" />
                ) : (
                  <Tv className='mx-auto' size="50" />
                )}
              </div>
            )}
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                {type === 'movie' ? 'Release Date' : 'First Air Date'}: {dayjs(release).format("MMMM D, YYYY")}
              </p>

              {children}
            </div>
          </div>

          <div className=''>
            <h2 className="text-white font-bold text-2xl mb-2">
              Watch On
            </h2>

            {(!isLoading && !providers?.length) ? (
              <p className='text-white'>
                Not availible on non-rental streaming services
              </p>
            ) : (
              <div className='grid grid-cols-4 gap-4'>
                { providers?.map((item) => (
                  <img
                    key={item.provider_id}
                    className='rounded w-12 h-12'
                    src={`https://www.themoviedb.org/t/p/original${item.logo_path}`}
                    alt={item.provider_name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}