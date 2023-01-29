import React from 'react'
import dayjs from 'dayjs';
import { Film, Tv } from "lucide-react";

type Props = {
  type: 'movie' | 'tv';
  title: string;
  rating?: number;
  poster_url: string | null;
  release_date: string;
}

export const PosterCard: React.FC<Props> = ({
  type,
  title,
  rating,
  poster_url,
  release_date,
}) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md flex h-full flex-col">
      { !!poster_url ? (
        <img className="w-full" src={poster_url} alt={`${title} poster`} />
      ) : type === 'movie' ? (
        <div className='flex-grow flex items-center'>
          <Film className='mx-auto' size="50" />
        </div>
      ) : (
        <div className='flex-grow flex items-center'>
          <Tv className='mx-auto' size="50" />
        </div>
      )}
      <div className="p-4">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-700">
          {type === 'movie' ? 'Movie' : 'TV Show'} - {dayjs(release_date).format('MMM D, YYYY')}
        </p>
        <div className="flex items-center mt-4">
          <span className="text-indigo-700 font-bold">Rating:</span>
          <span className="ml-2">{rating}/10</span>
        </div>
      </div>
    </div>
  )
}
