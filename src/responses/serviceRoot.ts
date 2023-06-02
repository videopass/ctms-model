import { Embedded } from '../registry/embedded'
import { Resources } from '../registry/resources'
import { System } from '../registry/system'
import { Service } from '../registry/service'
import { LinksResponse } from './links'

// http://developer.avid.com/ctms/api/rs_service_root.html
export interface ServiceRoot {
	systems: System[]
	service?: Service
	resources: Resources // link to other resources, which allow access to further groups of functionality
	_links: LinksResponse
	_embedded?: Embedded
}
