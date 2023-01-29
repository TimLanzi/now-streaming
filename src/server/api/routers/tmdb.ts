import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { tmdbUrl, TMDB_ENDPOINT } from "../../../utils/tmdb";
import { env } from "../../../env/server.mjs";
import { type WatchProviderResults, type Movie, type TmdbSearchResponse, type TVShow } from "../types/tmdb";

export const tmdbRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({
      query: z.string(),
      page: z.number().default(1),
      language: z.string().default('en-US'),
      region: z.string().optional(),
    }))
    .query(async({ input }) => {
      const tmdbRequestUrl = tmdbUrl({ type: 'multi', ...input });
      const res = await fetch(tmdbRequestUrl)
      const data = (await res.json() as TmdbSearchResponse);

      // Only care about movies and tv shows
      const results = data.results
        .filter(item => item.media_type === "movie" || item.media_type === "tv")

      return {
        ...data,
        results,
      } as TmdbSearchResponse
    }),

  movie: publicProcedure
    .input(z.number())
    .query(async({ input: id }) => {
      const res = await fetch(`${TMDB_ENDPOINT}/movie/${id}?api_key=${env.TMDB_API_KEY_V3}`);
      const data = (await res.json() as Movie)

      return data;
    }),

  tvShow: publicProcedure
    .input(z.number())
    .query(async({ input: id }) => {
      const res = await fetch(`${TMDB_ENDPOINT}/tv/${id}?api_key=${env.TMDB_API_KEY_V3}`);
      const data = (await res.json() as TVShow);

      return data;
    }),

  providers: publicProcedure
    .input(z.object({
      id: z.number(),
      type: z.enum(['movie', 'tv'])
    }))
    .query(async({ input: { id, type } }) => {
      const res = await fetch(`${TMDB_ENDPOINT}/${type}/${id}/watch/providers?api_key=${env.TMDB_API_KEY_V3}`);
      const data = (await res.json() as WatchProviderResults);

      // TODO make user region specific. hardcoding US for now
      const providers = data.results['US'];

      const flatrate = providers?.flatrate || [];
      const ads = providers?.ads || [];

      return flatrate.concat(ads);
    }),
});