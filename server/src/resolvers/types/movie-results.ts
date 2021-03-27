import { Field, Int, ObjectType } from "type-graphql";
import { Movie } from "../../entities/movie";
import { BaseResults } from "./search-results-base";

@ObjectType("MovieResults")
export class MovieResults extends BaseResults {
  @Field(() => [Movie])
  results?: Movie[];

  @Field(() => Int)
  page?: number;

  @Field(() => Int)
  total_results?: number;

  @Field(() => Int)
  total_pages?: number;
}