import { System } from "./system";


export interface DatamodelAssetModelById {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
