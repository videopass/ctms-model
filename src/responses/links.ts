import { SelfResponse } from './self'
import { CuryResponse } from './cury'

// http://developer.avid.com/ctms/api/rs_service_root.html#links
export interface LinksResponse {
	curies: CuryResponse[]
	self: SelfResponse
}
