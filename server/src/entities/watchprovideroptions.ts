import { Field, ObjectType } from "type-graphql";
import { WatchProvider } from "./watchprovider";

@ObjectType("WatchProviderOptions")
export class WatchProviderOptions {
  @Field({ nullable: true })
  link?: string;

  @Field(() => [WatchProvider], { nullable: true, defaultValue: [] })
  rent?: WatchProvider[];

  @Field(() => [WatchProvider], { nullable: true, defaultValue: [] })
  buy?: WatchProvider[];

  @Field(() => [WatchProvider], { nullable: true, defaultValue: [] })
  flatrate?: WatchProvider[];

  @Field(() => [WatchProvider], { nullable: true, defaultValue: [] })
  ads?: WatchProvider[];
}