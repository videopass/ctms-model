import { ResourceDescription } from "./resourceDescription";

//http://developer.avid.com/ctms/api/rs_service_root.html#resources
export interface Resource {
    name: string
    descriptions: ResourceDescription[]
}

