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
          ads {
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



const TV_SEARCH = gql`
  query($input: TVSearchInput!) {
    tvShowSearch(input: $input) {
      results {
        id
        name
        first_air_date
        poster_path
        watchOptions {
          flatrate {
            provider_name
            logo_path
            display_priority
            provider_id
          }
          ads {
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

export const useTvSearch = (query: string) => {
  return useQuery(TV_SEARCH, {
    variables: {
      input: { query },
    },
  });
}