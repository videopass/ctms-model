import { System } from "./system";


export interface TaxonomiesEntryByTaxonomyidAndEntryid {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
