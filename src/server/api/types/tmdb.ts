export type TmdbSearchResponse = {
  results: (Movie | TVShow)[];
  page: number;
  total_results: number;
  total_pages: number;
}

export type Genre = {
  id?: number;
  name?: string;
}

export type Movie = {
  id: number;
  backdrop_path: string | null;
  // belongs_to_collection?: object | null;
  media_type: 'movie';
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  runtime: number | null;
  tagline: string | null;
  title: string;
  vote_count: number;
  vote_average: number;
  watchOptions: WatchProviderOptions;
}

export type TVEpisode  = {
  id: number;
  air_date: string;
  episode_number: number;
  name: string;
  overview: string;
  season_number: number;
  still_path: string | null;
}

export type TVSeason = {
  id: number;
  air_date: string;
  episodes: TVEpisode[];
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

export type TVShow = {
  id: number;
  backdrop_path: string | null;
  first_air_date: string;
  genres: Genre[];
  media_type: 'tv';
  homepage: string;
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  poster_path: string;
  seasons: TVSeason[];
  tagline: string;
  type: string;
  vote_count: number;
  vote_average: number;
  watchOptions: WatchProviderOptions;
}

export type WatchProvider = {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export type WatchProviderOptions = {
  link: string;
  rent: WatchProvider[];
  buy: WatchProvider[];
  flatrate: WatchProvider[];
  ads: WatchProvider[];
}