import { System } from "./system";


export interface AaHoverscrub {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
