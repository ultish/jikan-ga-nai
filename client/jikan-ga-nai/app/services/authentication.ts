import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import ApolloService from "ember-apollo-client/services/apollo";
import { IUser } from "jikan-ga-nai/interfaces/user";
import { queryManager } from "ember-apollo-client";
import queryMe from "jikan-ga-nai/gql/queries/me.graphql";
import User from "jikan-ga-nai/models/user";

export default class Authentication extends Service {
  @queryManager() apollo!: ApolloService;

  @tracked
  authedMe: User | null = null;

  get me() {
    return this.authedMe;
  }

  updateMe(me: any) {
    console.log("update Me", me);
    this.authedMe = null;
  }

  async loginWithToken() {
    try {
      const me: IUser = await this.apollo.query(
        {
          query: queryMe
        },
        "me"
      );
      console.log("auth login", me);
      // this.authData.me = me;

      this.authedMe = new User(me.id, me.username, me.email, me.role);
      return this.authedMe;
    } catch (e) {
      // clear "me"
      this.authedMe = null;

      console.warn("Invalid login...");
      throw e;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module "@ember/service" {
  interface Registry {
    authentication: Authentication;
  }
}
