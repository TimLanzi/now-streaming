
import { Field, Int, ObjectType } from "type-graphql";
import { TVShow } from "../../entities/tvshow";
import { BaseResults } from "./search-results-base";

@ObjectType("TVShowResults")
export class TVShowResults extends BaseResults {
  @Field(() => [TVShow])
  results?: TVShow[];

  @Field(() => Int)
  page?: number;

  @Field(() => Int)
  total_results?: number;

  @Field(() => Int)
  total_pages?: number;
}