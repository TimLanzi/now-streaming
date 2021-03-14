
import axios from "axios";
import { Args, FieldResolver, Resolver, Root } from "type-graphql";
import { Movie } from "../entities/movie";
import { WatchProviderOptions } from "../entities/watchprovideroptions";
import { TMDB_ENDPOINT } from "../constants";

@Resolver(Movie)
export class MovieResolver {

  @FieldResolver(() => WatchProviderOptions)
  async watchOptions(
    @Root() parent: Movie,
  ) {
    try {
      const res = await axios.get(`${TMDB_ENDPOINT}/movie/${parent.id}/watch/providers?api_key=${process.env.TMDB_API_KEY_V3}`);

      // TODO make user region specific. hardcoding US for now
      return res.data.results.US;
    } catch(e) {
      throw e;
    }
  }
}