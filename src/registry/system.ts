// http://developer.avid.com/ctms/api/rs_service_root.html#system
import { Base } from "../asset/base";
import { Properties } from "./Properties";

export interface System extends Base {
    systemType: string
    systemID: string
    name: string
    systemTypeName?: string
    remoteAvailability: boolean
    version?: string
    host?: string
    properties?: Properties
}


