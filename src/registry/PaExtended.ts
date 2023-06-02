import { System } from "./system";


export interface PaExtended {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
