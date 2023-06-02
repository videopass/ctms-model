import { AaAssetById } from "./AaAssetById";
import { AaHoverscrub } from "./AaHoverscrub";
import { AaUpdateAssetById } from "./AaUpdateAssetById";
import { AaUpdateAttributesById } from "./AaUpdateAttributesById";
import { Asset } from "./Asset";
import { DatamodelAggregatedModel } from "./DatamodelAggregatedModel";
import { DatamodelAssetModelById } from "./DatamodelAssetModelById";
import { DatamodelSystemModel } from "./DatamodelSystemModel";
import { Location } from "./Location";
import { LocItemById } from "./LocItemById";
import { LocRootItem } from "./LocRootItem";
import { PaExtended } from "./PaExtended";
import { PaStorage } from "./PaStorage";
import { Search } from "./Search";
import { SearchSimpleSearch } from "./SearchSimpleSearch";
import { Setting } from "./Setting";
import { TaxonomiesEntryByTaxonomyidAndEntryid } from "./TaxonomiesEntryByTaxonomyidAndEntryid";
import { TaxonomiesTaxonomyByTaxonomyid } from "./TaxonomiesTaxonomyByTaxonomyid";
import { Taxonomy } from "./Taxonomy";

//http://developer.avid.com/ctms/api/rs_service_root.html#resources
export interface Resources {
    "loc:locations": Location[]
    "aa:assets": Asset[]
    "settings:settings": Setting[]
    "aa:update-attributes-by-id": AaUpdateAttributesById[]
    "datamodel:asset-model-by-id": DatamodelAssetModelById[]
    "loc:root-item": LocRootItem[]
    "taxonomies:taxonomy-by-taxonomyid": TaxonomiesTaxonomyByTaxonomyid[]
    "datamodel:system-model": DatamodelSystemModel[]
    "taxonomies:taxonomies": Taxonomy[]
    "pa:storage": PaStorage[]
    "aa:update-asset-by-id": AaUpdateAssetById[]
    "search:simple-search": SearchSimpleSearch[]
    "pa:extended": PaExtended[]
    "aa:asset-by-id": AaAssetById[]
    "search:searches": Search[]
    "loc:item-by-id": LocItemById[]
    "aa:hoverscrub": AaHoverscrub[]
    "datamodel:aggregated-model": DatamodelAggregatedModel[]
    "taxonomies:entry-by-taxonomyid-and-entryid": TaxonomiesEntryByTaxonomyidAndEntryid[]
}

