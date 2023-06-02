import { AssetObject } from '..'
import { Collection } from './Collection'
import { Items } from './Items'

export interface Embedded {
	[key: string]: any
	'loc:collection': Collection
	associations?: AssetObject[]
	_embedded?: Items
}
