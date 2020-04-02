import { User } from "./user";

export interface Message {
  id: string;
  text: string;
  user: User;
}
