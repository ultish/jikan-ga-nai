// import Service from "@ember/service";
import ApolloService from "ember-apollo-client/services/apollo";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

// Create an http link:
// const httpLink = new HttpLink({
//   uri: "http://localhost:8000/graphql"
// });

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true
  }
});

const cache = new InMemoryCache();

export default class Apollo extends ApolloService {
  // normal class body definition here
  // @service session: any;

  // clientOptions() {
  //   console.log("client opts");
  //   return {
  //     link: this.link(),
  //     cache: cache
  //   };
  // }

  link() {
    let httpLink = super.link();

    // const socket = new Socket("ws://socket-url", {
    //   params: { token: this.get("session.token") }
    // });
    // const socketLink = createAbsintheSocketLink(AbsintheSocket.create(socket));

    // return split(
    //   ({ query }) => {
    //     const { kind, operation } = getMainDefinition(query);

    //     return kind === "OperationDefinition" && operation === "subscription";
    //   },
    //   socketLink,
    //   httpLink
    // );
    return split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    );
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module "@ember/service" {
  interface Registry {
    apollo: Apollo;
  }
}
