import { System } from "./system";


export interface LocItemById {
    href: string;
    systems: System[];
    templated: boolean;
    description?: string;
}
