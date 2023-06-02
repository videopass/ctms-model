import { Base } from '../../asset/base'
import { Embedded } from '../../registry/embedded'
import { LinksResponse } from '../links'

export interface Result {
	base: Base
	success: boolean
	errorMessage: string
}

export interface ItemsResult {
	results: Result[]
	_links: LinksResponse
	_embedded: Embedded
}
