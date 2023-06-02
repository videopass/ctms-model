import { Filter } from "./elasticFilter";
import { QueryBody } from "./elasticQueryBody";

export interface Expression {
    query: QueryBody
    username: string
    filter?: Filter
}


