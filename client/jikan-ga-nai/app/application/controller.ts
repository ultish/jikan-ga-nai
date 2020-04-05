import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class Application extends Controller {
  constructor() {
    super(...arguments);
  }

  @action
  logout() {
    localStorage.setItem("x-token", "");

    this.transitionToRoute("login");
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    application: Application;
  }
}
