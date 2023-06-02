import { AssetType, BaseType } from '../asset'
import { CommonAssetType, CommonBaseType } from '../asset/enums/commonType'

export class BaseTypeQuery {
	assetType: BaseType
	commonType: CommonBaseType
	value: string
	/**
	 * Search query for search in folder on an attribute and base types
	 * @param baseType Enum to set asset type to search on. Example folder, project or folder-item
	 * @param commonType Search on this attribute
	 * @param value to search for
	 */
	constructor(baseType: BaseType, commonType: CommonBaseType, value: string) {
		this.assetType = baseType
		this.commonType = commonType
		this.value = value
	}
}

export class AssetTypeQuery {
	assetType: AssetType
	commonType: CommonAssetType
	value: string
	/**
	 * Search query for search in folder on an attribute and asset types
	 * @param assetType Enum to set asset type to search on. Example sequence or masterclip
	 * @param commonType Search on this attribute
	 * @param value to search for
	 */
	constructor(assetType: AssetType, commonType: CommonAssetType, value: string) {
		this.assetType = assetType
		this.commonType = commonType
		this.value = value
	}
}
