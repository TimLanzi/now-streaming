import React from 'react'

export const Attributions = () => {
  return (
    <div className='flex items-center space-x-12'>
      <a className='w-16' href="https://www.themoviedb.org/" target="_blank" rel="noreferrer noopener">
        <img
          src="/tmdb.svg"
          alt="Powered by TMDB"
          title="Powered by TMDB"
        />
      </a>

      <a className='w-44' href="https://www.justwatch.com/" target="_blank" rel="noreferrer noopener">
        <img
          src="/justwatch.svg"
          alt="Powered by JustWatch"
          title="Powered by JustWatch"
        />
      </a>
    </div>
  )
}
