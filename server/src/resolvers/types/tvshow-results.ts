
import { Field, ObjectType } from "type-graphql";
import { TVShow } from "../../entities/tvshow";
import { BaseResults } from "./search-results-base";

@ObjectType("TVShowResults")
export class TVShowResults extends BaseResults {
  @Field(() => [TVShow])
  results?: TVShow[];
}