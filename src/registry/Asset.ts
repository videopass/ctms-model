import { System } from "./system";

export interface Asset {
    href: string;
    systems: System[];
    templated: boolean;
    description?: string;
}
