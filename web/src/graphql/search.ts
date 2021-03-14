import { gql, useQuery } from "@apollo/client";

const MOVIE_SEARCH = gql`
  query($input: MovieSearchInput!) {
    movieSearch(input: $input) {
      results {
        id
        title
        overview
        poster_path
        release_date
        watchOptions {
          flatrate {
            provider_name
            logo_path
            display_priority
            provider_id
          }
        }
      }
    }
  }
`

export const useMovieSearch = (query: string) => {
  return useQuery(MOVIE_SEARCH, {
    variables: {
      input: { query }
    },
  });
}