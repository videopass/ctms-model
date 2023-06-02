// http://developer.avid.com/ctms/api/index.html
import { Embedded } from '../registry/embedded'
import { ResourceEntryPoint } from '../responses/resourceEntryPoint'
import { LinksResponse } from '../responses/links'
import { Base } from './base'
import { Common } from './common'
import { BaseType } from './enums'
import { Status } from './status'

export interface AssetObject extends ResourceEntryPoint {
	base: Base /** systemType, systemId, type, id */
	common: Common /** name, creator, created, modifier, ... */
	status: Status
	type: BaseType
	_embedded: Embedded
	_links: LinksResponse
}
