import { QueryGroup } from "./elasticQuery";
import { ElasticBodyType } from "./enums";

export interface QueryBody {
    type: ElasticBodyType;
    queries: QueryGroup[];
}
