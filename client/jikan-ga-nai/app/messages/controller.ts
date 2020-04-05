import Controller from "@ember/controller";
import { A } from "@ember/array";
import { sort } from "@ember/object/computed";
import { Message } from "jikan-ga-nai/models/message";

export default class Messages extends Controller {
  constructor() {
    super(...arguments);
  }

  // Can define a Message interface and make these use that type instead
  msgCache = A<Message>();

  @sort("msgCache", (a, b) => {
    const aId = Number.parseInt(a.id);
    const bId = Number.parseInt(b.id);

    if (aId > bId) {
      return -1;
    } else if (aId < bId) {
      return 1;
    }
    return 0;
  })
  sortedMsgs!: [Message];

  // This is basically how i'm handling subscriptions atm and dealing with
  // the intial model load.
  addToCache = function(this: Messages, msg: Message) {
    this.msgCache.pushObject(msg);
  };
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    messages: Messages;
  }
}
