import { Common } from "../asset/common";
import { ResourceEntryPoint } from "./resourceEntryPoint";

export interface BaseResources extends ResourceEntryPoint {
    common: Common;
}

export interface AssetResources extends BaseResources { }
export interface SearchResources extends BaseResources { }
export interface LocationResources extends BaseResources { }
export interface TaxonomiesResources extends BaseResources { }
export interface DatamodelResources extends BaseResources { }
export interface PaResources extends BaseResources { }