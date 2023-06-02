import { System } from "./system";


export interface SearchSimpleSearch {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
