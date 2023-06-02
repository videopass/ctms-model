import { System } from "./system";


export interface Location {
    href: string;
    description?: string;
    systems: System[];
    templated: boolean;
}
