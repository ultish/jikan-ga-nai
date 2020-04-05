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

  // // Can define a Message interface and make these use that type instead
  // msgCache = A<Message>();

  // @sort("msgCache", (a, b) => {
  //   const aId = Number.parseInt(a.id);
  //   const bId = Number.parseInt(b.id);

  //   if (aId > bId) {
  //     return -1;
  //   } else if (aId < bId) {
  //     return 1;
  //   }
  //   return 0;
  // })
  // sortedMsgs!: [Message];

  // // This is basically how i'm handling subscriptions atm and dealing with
  // // the intial model load.
  // addToCache = function(this: Application, msg: Message) {
  //   this.msgCache.pushObject(msg);
  // };
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    application: Application;
  }
}
