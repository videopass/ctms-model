import { System } from "./system";


export interface Taxonomy {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
