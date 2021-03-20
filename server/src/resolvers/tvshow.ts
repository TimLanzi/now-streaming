
import axios from "axios";
import { Args, FieldResolver, Resolver, Root } from "type-graphql";
import { TVShow } from "../entities/tvshow";
import { WatchProviderOptions } from "../entities/watchprovideroptions";
import { TMDB_ENDPOINT } from "../constants";

@Resolver(TVShow)
export class MovieResolver {

  @FieldResolver(() => WatchProviderOptions)
  async watchOptions(
    @Root() parent: TVShow,
  ) {
    try {
      const res = await axios.get(`${TMDB_ENDPOINT}/tv/${parent.id}/watch/providers?api_key=${process.env.TMDB_API_KEY_V3}`);
      // console.log(res.data.results.US)
      // TODO make user region specific. hardcoding US for now
      return res.data.results.US;
    } catch(e) {
      throw e;
    }
  }
}