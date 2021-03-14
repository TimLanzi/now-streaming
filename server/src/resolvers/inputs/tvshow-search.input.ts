import { Field, InputType, Int } from "type-graphql";

@InputType("TVSearchInput")
export class TVSearchInput {
  @Field()
  query!: string;

  @Field(() => Int, { defaultValue: 1, nullable: true })
  page?: number;

  @Field({ nullable: true, defaultValue: "en-US" })
  language?: string;
}