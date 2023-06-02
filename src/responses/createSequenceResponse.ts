import { Base } from "../asset/base";

export interface CreateSequenceResponse {
  displayName: string;
  mobId: string;
  id: string;
  base: Base;
  parentFolderBase: Base;
  targetFolderFullId: string;
}