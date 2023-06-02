import { BaseType } from './enums/baseType'

//http://developer.avid.com/ctms/api/index.html
export interface Base {
	systemType: string
	systemID: string
	type: BaseType
	id: string
}
