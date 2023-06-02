import { System } from "./system";


export interface AaUpdateAttributesById {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
