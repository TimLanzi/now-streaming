import React from 'react'
import { Attributions } from './Attributions';

type Props = {
  overview: string;
  // actors
}

export const ResultDescription: React.FC<Props> = ({
  overview,
}) => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 pr-4">
          <h3 className="text-gray-800 font-bold text-xl mb-4">
            Overview
          </h3>
          <p className="text-gray-600">
            {overview}
          </p>
        </div>
        {/* <div className="md:w-2/3">
          <h3 className="text-gray-800 font-bold text-xl mb-4">Cast</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <img className="w-24 h-24 rounded-full" src="actor-1.jpg" alt="Actor 1" />
              <p className="text-center text-gray-600 mt-2">Actor 1</p>
            </div>
            <div>
              <img className="w-24 h-24 rounded-full" src="actor-2.jpg" alt="Actor 2" />
              <p className="text-center text-gray-600 mt-2">Actor 2</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className='mt-8'>
        <Attributions />
      </div>
    </div>
  )
}
