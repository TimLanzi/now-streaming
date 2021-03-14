import { Field, Int, ObjectType } from "type-graphql";
import { TVEpisode } from "./tvepisode";

@ObjectType("TVSeason")
export class TVSeason {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  air_date?: string;

  @Field(() => [TVEpisode], { nullable: true })
  episodes?: TVEpisode[];

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  overview?: string;

  @Field(() => String, { nullable: true })
  poster_path?: string|null;

  @Field(() => Int, { nullable: true })
  season_number?: number;
}