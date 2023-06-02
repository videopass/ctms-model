import { BasePa, Action } from "./basePa";
import { SequenceType } from './enums/sequenceType';

export class Sequence implements BasePa {
  item: Action;
  dbPath: string;

  /**
   * Create a Sequence object
   * @param name 
   * @param path can be full path like /Projects/Production
   * @param type default is sequence
   */
  constructor(name: string, path: string, type: SequenceType = SequenceType.sequence) {
    this.dbPath = path;
    this.item = { createSequence: { name, type } };
  }
}
