import { DataType } from './enums/dataType'

export class ImportAsset {
	fileName: string
	dataType?: DataType
	imageName?: string

	constructor(fileName: string, dataType: DataType = DataType.AAF) {
		this.fileName = fileName
		this.dataType = dataType
	}
}
