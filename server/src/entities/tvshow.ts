import { Field, Int, ObjectType } from "type-graphql";
import { Genre } from "./genre";
import { TVSeason } from "./tvseason";
import { WatchProviderOptions } from "./watchprovideroptions";

@ObjectType("TVShow")
export class TVShow {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  backdrop_path?: string|null;

  @Field({ nullable: true })
  first_air_date?: string;

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field({ nullable: true })
  media_type?: string;

  @Field({ nullable: true })
  homepage?: string;

  @Field({ nullable: true })
  last_air_date?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  number_of_episodes?: number;

  @Field(() => Int, { nullable: true })
  number_of_seasons?: number;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  poster_path?: string;

  @Field(() => [TVSeason], { nullable: true })
  seasons?: TVSeason[];

  @Field({ nullable: true })
  tagline?: string;

  @Field({ nullable: true })
  type?: string;

  @Field(() => WatchProviderOptions, { nullable: true })
  watchOptions?: WatchProviderOptions;
}