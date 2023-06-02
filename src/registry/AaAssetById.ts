import { System } from "./system";


export interface AaAssetById {
    href: string;
    description?: string;
    systems: System[];
    templated: boolean;
}
