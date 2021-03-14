import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export abstract class BaseResults {
  @Field(() => Int)
  page?: number;

  @Field(() => Int)
  total_results?: number;

  @Field(() => Int)
  total_pages?: number;
}