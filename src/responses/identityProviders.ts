import { ResourceEntryPoint } from "..";
import { Embedded } from '../registry/embedded'

export interface IdentityProviders extends ResourceEntryPoint {
    _embedded: Embedded
}
