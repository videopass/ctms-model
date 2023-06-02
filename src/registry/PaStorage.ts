import { System } from "./system";


export interface PaStorage {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
