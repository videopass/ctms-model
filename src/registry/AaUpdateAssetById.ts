import { System } from "./system";


export interface AaUpdateAssetById {
    href: string;
    description?: string;
    systems: System[];
    templated: boolean;
}
