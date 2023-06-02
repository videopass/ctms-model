import { System } from "./system";


export interface Search {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
