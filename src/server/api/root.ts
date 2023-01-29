import { createTRPCRouter } from "./trpc";
import { tmdbRouter } from "./routers/tmdb";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  tmdb: tmdbRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
