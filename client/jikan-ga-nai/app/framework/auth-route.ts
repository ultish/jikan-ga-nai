import Route from "@ember/routing/route";
import { queryManager } from "ember-apollo-client";
import queryMe from "jikan-ga-nai/gql/queries/me.graphql";

// importing this for the type reference
import ApolloService from "ember-apollo-client/services/apollo";

/**
 * This route checks you've logged in, otherwise re-routes you to the
 * login page
 */
export default class AuthRoute extends Route {
  // ! tells typescrypt this this variable will definately be initialized.
  // otherwise it throws a TS error as we haven't initialized this var
  @queryManager() apollo!: ApolloService;

  async beforeModel() {
    const xToken = localStorage.getItem("x-token");
    console.log("xtoken", xToken);
    if (xToken) {
      // try to login
      try {
        await this.apollo.query({
          query: queryMe
        });
      } catch (e) {
        console.warn("Invalid login, redirecting...");
        this.transitionTo("login");
      }
    } else {
      // redirect to login page
      console.log("redirecting");
      this.transitionTo("login");
    }
  }
}
