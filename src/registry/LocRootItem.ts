import { System } from "./system";


export interface LocRootItem {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
