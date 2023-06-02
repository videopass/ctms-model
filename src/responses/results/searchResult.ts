import { Base } from "../../asset/base";
import { Embedded } from "../../registry/embedded";
import { Paging } from "../paging";

export interface SearchResult {
    base: Base;
    paging: Paging;
    total: number;
    _embedded: Embedded;
}