import { Card } from "./card";
import { Customer } from "./customer";

export interface Account {
    id: string;
    name: string;
    cards: Card[];
    customer: Customer;
  }