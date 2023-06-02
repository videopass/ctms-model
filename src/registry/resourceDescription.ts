import { System } from "./system";

//http://developer.avid.com/ctms/api/rs_service_root.html#resources
export interface ResourceDescription {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}

