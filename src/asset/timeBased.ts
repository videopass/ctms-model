import { LinksResponse } from '../responses/links'
import { Layer } from './layer'

export interface TimeBased {
	editRate: string
	dropFrame: boolean
	videoStartTC: string
	layers: Layer[]
	_links?: LinksResponse
}
