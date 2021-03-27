import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import tmdb from "../util/tmdb";
import { MovieResults } from "./types/movie-results";
import { TVShowResults } from "./types/tvshow-results";
import { SearchInput } from "./inputs/search.input";

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
}