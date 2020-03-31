import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import messages from "jikan-ga-nai/gql/queries/messages.graphql";

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here\
}) {
  @queryManager apollo: any;

  model() {
    // watchQuery behaves like a live array i think. But not a subscription,
    // theres another function for that.

    return this.get("apollo").watchQuery(
      {
        query: messages
      },
      /**
       * this is the resultsKey param.
       * It defines where in the payload you want to fetch resutls from.
       * eg our payload looks like:
       * data {
       *    messages: {
       *       edges: [
       *          ...
       *       ]
       *       pageIno: {
       *          ...
       *       }
       *    }
       * }
       *
       * so you can say "messages" to get everything, or "messages.edges"
       * to only get the actual message content
       */
      "messages"
    );
  }
}
