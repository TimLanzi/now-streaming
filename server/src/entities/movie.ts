import { Field, Int, ObjectType } from "type-graphql";
import { Genre } from "./genre";
import { WatchProviderOptions } from "./watchprovideroptions";

@ObjectType("Movie")
export class Movie {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  backdrop_path?: string|null;

  // @Field()
  // belongs_to_collection?: object|null;

  @Field({ nullable: true })
  budget?: number;

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field(() => String, { nullable: true })
  homepage?: string|null;

  @Field(() => String, { nullable: true })
  imdb_id?: string|null;

  @Field({ nullable: true })
  overview?: string;

  @Field({ nullable: true })
  popularity?: number;

  @Field(() => String, { nullable: true })
  poster_path?: string|null;

  @Field({ nullable: true })
  release_date?: string;

  @Field(() => Int, { nullable: true })
  runtime?: number|null;

  @Field(() => String, { nullable: true })
  tagline?: string|null;

  @Field({ nullable: true })
  title?: string;

  @Field(() => WatchProviderOptions, { nullable: true })
  watchOptions?: WatchProviderOptions;
}