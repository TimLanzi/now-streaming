import { Field, Int, ObjectType } from "type-graphql";

@ObjectType("WatchProvider")
export class WatchProvider {
  @Field(() => Int, { nullable: true })
  display_priority?: number;

  @Field({ nullable: true })
  logo_path?: string;

  @Field(() => Int, { nullable: true })
  provider_id?: number;

  @Field({ nullable: true })
  provider_name?: string;
}