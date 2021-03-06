import { gql, useLazyQuery, useQuery } from "@apollo/client";

const MOVIE_SEARCH = gql`
  query($input: SearchInput!) {
    movieSearch(input: $input) {
      page
      total_results
      total_pages
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
    
    tvShowSearch(input: $input) {
      total_results
    }
  }
`

export const useMovieSearch = (query: string, page: string) => {
  return useQuery(MOVIE_SEARCH, {
    variables: {
      input: {
        query,
        page: parseInt(page) || 1,
      },
    },
  });
}



const TV_SEARCH = gql`
  query($input: SearchInput!) {
    tvShowSearch(input: $input) {
      page
      total_results
      total_pages
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
    
    movieSearch(input: $input) {
      total_results
    }
  }
`

export const useTvSearch = (query: string, page: string) => {
  return useQuery(TV_SEARCH, {
    variables: {
      input: {
        query,
        page: parseInt(page) || 1,
      },
    },
  });
}


const MULTI_SEARCH = gql`
  query($input: SearchInput!) {
    multiSearch(input: $input) {
      total_results
      results {
        ... on Movie {
          id
          title
          media_type
        }
        
        ... on TVShow {
          id
          name
          media_type
        }
      }
    }
  }
`;

export const useMultiSearch = () => {
  return useLazyQuery(MULTI_SEARCH);
}