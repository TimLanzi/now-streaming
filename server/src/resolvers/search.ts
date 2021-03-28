import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import tmdb from "../util/tmdb";
import { MovieResults } from "./types/movie-results";
import { TVShowResults } from "./types/tvshow-results";
import { SearchInput } from "./inputs/search.input";
import { MultiSearchResults } from "./types/multi-search";

@Resolver()
export class SearchResolver {
  @Query(() => MovieResults)
  async movieSearch(
    @Arg("input") input: SearchInput,
  ) {
    try {
      const res = await axios.get(tmdb({
        type: "movie",
        ...input,
      }));
      
      return res.data
    } catch(e) {
      throw e;
    }
  }

  @Query(() => TVShowResults)
  async tvShowSearch(
    @Arg("input") input: SearchInput,
  ) {
    try {
      const res = await axios.get(tmdb({
        type: "tv",
        ...input,
      }));

      return res.data;
    } catch(e) {
      throw e;
    }
  }

  @Query(() => MultiSearchResults)
  async multiSearch(
    @Arg("input") input: SearchInput,
  ) {
    try {
      const res = await axios.get(tmdb({
        type: "multi",
        ...input,
      }));

      // Filter out non-movie and non-tv results
      return {
        ...res.data,
        results: res.data.results.filter(item => item.media_type === "movie" || item.media_type === "tv"),
      };
    } catch(e) {
      throw e;
    }
  }
}