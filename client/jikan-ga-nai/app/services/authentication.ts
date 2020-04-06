import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
// import ApolloService from "ember-apollo-client/services/apollo";
// import Apollo from "jikan-ga-nai/services/apollo";
import { IUser } from "jikan-ga-nai/interfaces/user";
import { queryManager } from "ember-apollo-client";
import queryMe from "jikan-ga-nai/gql/queries/me.graphql";
import User from "jikan-ga-nai/models/user";

import signIn from "jikan-ga-nai/gql/mutations/signIn.graphql";
import { SignIn } from "jikan-ga-nai/interfaces/sign-in";

export default class Authentication extends Service {
  @queryManager() apollo!: any;

  @tracked
  authedMe: User | null = null;

  @tracked
  token?: string;

  getToken() {
    if (!this.token) {
      // check if we have it in local storage
      this.token = localStorage.getItem("x-token") || undefined;
    }

    console.log("auth get token", this.token);
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    console.log("auth set token", token);
    localStorage.setItem("x-token", token);
  }

  async logout() {
    console.log("auth logout");
    this.token = undefined;
    this.authedMe = null;
    localStorage.setItem("x-token", "");

    console.log("clearing store");
    this.apollo.apolloClient.clearStore();
  }

  async login(username: string, password: string) {
    try {
      const login: SignIn = await this.apollo.mutate({
        mutation: signIn,
        variables: {
          login: username,
          password: password
        }
      });

      this.setToken(login.signIn.token);

      console.log("auth login", this.token);

      // TODO: this is a bit odd. Without re-querying apollo, it maintains a connection that
      // isn't logged in. So logging in again here by making a query via the new token will
      // re-create the apollo link but this time with the new token..
      const me = await this.loginWithToken();
      return me;
    } catch (e) {
      console.warn(e);
      throw e;
    }
  }

  async loginWithToken() {
    try {
      const me: IUser = await this.apollo.query(
        {
          query: queryMe
        },
        "me"
      );
      console.log("auth login via token", me);

      this.authedMe = new User(me.id, me.username, me.email, me.role);
      return this.authedMe;
    } catch (e) {
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
