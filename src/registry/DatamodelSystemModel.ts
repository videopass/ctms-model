import { System } from "./system";


export interface DatamodelSystemModel {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
