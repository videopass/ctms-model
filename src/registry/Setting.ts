import { System } from "./system";


export interface Setting {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
