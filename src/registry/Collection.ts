import { Paging } from '..'
import { Link } from '../responses'
import { Items } from './Items'

export interface Collection {
	paging: Paging
	_links: Link
	_embedded: Items
}
