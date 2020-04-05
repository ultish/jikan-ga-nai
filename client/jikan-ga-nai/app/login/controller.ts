import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

import ApolloService from "ember-apollo-client/services/apollo";
import { queryManager } from "ember-apollo-client";
import signIn from "jikan-ga-nai/gql/mutations/signIn.graphql";
import { SignIn } from "jikan-ga-nai/models/sign-in";
import { htmlSafe } from "@ember/string";

export default class Login extends Controller {
  @queryManager({ service: "apollo" }) apollo!: ApolloService;
  @tracked
  username = "";
  @tracked
  password = "";
  @tracked
  errors = [];

  numBgImages = 10;
  @tracked
  backgroundImage = "images/spacex-1.jpg";
  @tracked
  background = htmlSafe(`background-image: url('${this.backgroundImage}');`);

  constructor() {
    super(...arguments);
  }

  onRouteActivate = () => {
    this.backgroundImage = `images/spacex-${Math.ceil(
      Math.random() * this.numBgImages
    )}.jpg`;
  };

  @action
  async login(e: Event) {
    console.log("login", e);
    e.preventDefault();
    try {
      const login: SignIn = await this.apollo.mutate({
        mutation: signIn,
        variables: {
          login: this.username,
          password: this.password
        }
      });

      localStorage.setItem("x-token", login.signIn.token);

      this.transitionToRoute("application");

      console.log("login", login);
    } catch (e) {
      console.log(e);
      this.errors = e.errors;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    login: Login;
  }
}
