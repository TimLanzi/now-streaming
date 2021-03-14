import { Field, Int, ObjectType } from "type-graphql";

@ObjectType("TVEpiside")
export class TVEpisode {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  air_date?: string;

  @Field({ nullable: true })
  episode_number?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  overview?: string;

  @Field(() => Int, { nullable: true })
  season_number?: number;

  @Field(() => String, { nullable: true })
  still_path?: string|null;
}