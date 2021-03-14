import { Field, InputType, Int } from "type-graphql";

@InputType("MovieSearchInput")
export class MovieSearchInput {
  @Field()
  query!: string;

  @Field(() => Int, { defaultValue: 1, nullable: true })
  page?: number;

  @Field({ nullable: true, defaultValue: "en-US" })
  language?: string;

  @Field({ nullable: true })
  region?: string;
}