import { Field, Int, ObjectType } from "type-graphql";
import { Movie } from "../../entities/movie";
import { TVShow } from "../../entities/tvshow";
import { BaseResults } from "./search-results-base";
import { MultiSearchUnion } from "./multi-search-results.union";

@ObjectType("MultiSearchResults")
export class MultiSearchResults extends BaseResults {
  @Field(() => [MultiSearchUnion])
  results?: (Movie|TVShow)[];

  @Field(() => Int)
  page?: number;

  @Field(() => Int)
  total_results?: number;

  @Field(() => Int)
  total_pages?: number;
}