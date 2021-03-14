import { Field, Int, ObjectType } from "type-graphql";

@ObjectType("Genre")
export class Genre {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;
}