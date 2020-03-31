import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import messages from "jikan-ga-nai/gql/queries/messages.graphql";

// importing this for the type reference
import ApolloService from "ember-apollo-client/services/apollo";

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // ! tells typescrypt this this variable will definately be initialized.
  // otherwise it throws a TS error as we haven't initialized this var
  @queryManager apollo!: ApolloService;

  model() {
    // watchQuery behaves like a live array i think. But not a subscription,
    // theres another function for that.

    // because this.apollo is typed, watchQuery function breaks if you
    // provide incorrect options to it, even down to the object keys in
    // the first param!
    return this.apollo.watchQuery(
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
