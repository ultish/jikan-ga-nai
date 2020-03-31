// declare module "ember-apollo-client/services/apollo" {
//   import Service from "@ember/service";

//   import {
//     MutationOptions,
//     QueryOptions,
//     WatchQueryOptions,
//     SubscriptionOptions
//   } from "apollo-client";

//   interface Options {
//     apiURL: string;
//     requestCredentials?: string;
//   }

//   export default class ApolloService extends Service {
//     public options: Options;

//     public clientOptions(): object;

//     public link(): unknown;

//     public mutate<T = object>(
//       ots: MutationOptions,
//       resultKey?: string
//     ): Promise<T>;

//     public query<T = object>(
//       opts: QueryOptions,
//       resultKey?: string
//     ): Promise<T>;

//     public watchQuery<T = object>(opts: any, resultKey?: string): Promise<T>;

//     public subscribe<T = object>(
//       opts: SubscriptionOptions,
//       resultKey?: string
//     ): Promise<T>;
//   }
// }
