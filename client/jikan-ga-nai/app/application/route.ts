import AuthRoute from "jikan-ga-nai/framework/auth-route";
import ApplicationController from "./controller";

export default class Application extends AuthRoute {
  setupController(controller: ApplicationController) {
    // console.log("application firing me", this.me);
    // super.setupController(controller, {
    //   me: this.me
    // });
    controller.onRouteActivate();
  }

  activate() {
    console.log("activate application");
  }
}
