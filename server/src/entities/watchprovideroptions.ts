import { Field, ObjectType } from "type-graphql";
import { WatchProvider } from "./watchprovider";

@ObjectType("WatchProviderOptions")
export class WatchProviderOptions {
  @Field({ nullable: true })
  link?: string;

  @Field(() => [WatchProvider], { nullable: true })
  rent?: WatchProvider[];

  @Field(() => [WatchProvider], { nullable: true })
  buy?: WatchProvider[];

  @Field(() => [WatchProvider], { nullable: true })
  flatrate?: WatchProvider[];
}