
import { createUnionType } from "type-graphql";
import { Movie } from "../../entities/movie";
import { TVShow } from "../../entities/tvshow";

export const MultiSearchUnion = createUnionType({
  name: "MultiSearchResultUnion",
  types: () => [Movie, TVShow],
  resolveType: value => {
    if (value.media_type === "tv") {
      return TVShow
    }

    if (value.media_type === "movie") {
      return Movie;
    }

    return undefined;
  }
})