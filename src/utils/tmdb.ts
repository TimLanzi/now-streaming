export const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/search/multi?api_key=fc47c8b277fac29436a6e04f577daaf3&language=en-US&page=1&include_adult=false&query=john
export type TMDBRequest = {
  type: string;
  query: string;
  page?: number;
  language?: string;
  region?: string;
}

// Returns full TMDB API search request
export function tmdbUrl({
  type,
  query,
  page,
  language,
  region,
}: TMDBRequest): string {
  const BASE_URL = `${TMDB_ENDPOINT}/search/${type}?api_key=${process.env.TMDB_API_KEY_V3}&language=${language}&query=${query}&page=${page || 1}&include_adult=false`;

  return !region
    ? `${BASE_URL}`
    : `${BASE_URL}&region=${region}`
}