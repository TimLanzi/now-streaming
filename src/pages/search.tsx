import React from 'react'
import { useRouter } from 'next/router'
import { Container } from '../ui/Container'
import { api } from '../utils/api'
import { PosterCard } from '../components/PosterCard'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { Pagination } from '../ui/Pagination'
import Link from 'next/link'
import { Attributions } from '../components/Attributions'
import { SearchBar } from '../components/SearchBar'

const SearchPage = () => {
  const router = useRouter();
  const { data, status } = api.tmdb.search.useQuery({
    query: router.query.query as string,
    page: router.query.page ? parseInt(router.query.page as string) : undefined,
  }, {
    enabled: !!router.query.query,
  });

  const onPageChange = (page: number) => {
    const url = `?query=${router.query.query as string}&page=${page}`;
    void router.push(url);
  }

  return (
    <div className='pt-32 pb-8'>
      <Container>
        { status === 'loading' && (
          <LoadingSpinner />
        )}

        { !!data && (
          <>
            <div className='mb-5'>
              <SearchBar width='full' />
            </div>

            <div className='flex justify-between items-center text-lg text-gray-500 mb-5'>
              <span>
                {data.total_results} results
              </span>
              <span>
              Page {data.page} of {data.total_pages}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              { data?.results.map((item) => (
                <Link key={item.id} href={`/${item.media_type}/${item.id}`}>
                  <PosterCard
                    type={item.media_type}
                    title={item.media_type === 'movie' ? item.title : item.name}
                    poster_url={item.poster_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}` : null}
                    release_date={item.media_type === 'movie' ? item.release_date : item.first_air_date}
                    rating={item.vote_average}
                  />
                </Link>
              ))}
            </div>

            <div className='mt-5'>
              <Pagination
                currentPage={data.page}
                pageCount={data.total_pages}
                onPageChange={onPageChange}
              />
            </div>

            <div className='mt-12'>
              <Attributions />
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default SearchPage