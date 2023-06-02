// http://developer.avid.com/ctms/api/index.html#_common_object
import { AssetType } from './enums/assetType'

export interface Common {
	name: string
	path: string /* can be undefined for get assets instead of location */
	creator: string
	created: Date
	modifier?: string
	assetType?: AssetType
	editRate?: string
	endTC?: string
	dropframe?: false
	modified: Date
	startTC?: string
	assetTypeLabel?: string
	durationTC?: string
}
