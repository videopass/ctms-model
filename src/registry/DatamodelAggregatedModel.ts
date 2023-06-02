import { System } from "./system";


export interface DatamodelAggregatedModel {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
