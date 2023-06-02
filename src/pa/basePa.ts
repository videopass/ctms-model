import { SequenceType } from './enums/sequenceType'

export interface BasePa {
	item: Action
	/**
	 * dbPath has to be a path started with /
	 */
	dbPath: string
}




export class CreateSequence {
	name: string
	type: SequenceType

	constructor(name: string, type: SequenceType) {
		this.name = name
		this.type = type
	}
}

export interface Action {
	createSequence: CreateSequence
}
