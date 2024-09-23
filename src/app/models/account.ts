import { Card } from "./card";
import { Customer } from "./customer";

export interface Account {
    name: string;
    cards: Card[];
    customers: Customer[];
  }