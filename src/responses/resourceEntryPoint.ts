import { Base } from '..'
import { LinksResponse } from './links'

export interface ResourceEntryPoint {
	base: Base
	_links: LinksResponse // methods names
}
