import { System } from "./system";


export interface TaxonomiesTaxonomyByTaxonomyid {
    href: string;
    description: string;
    systems: System[];
    templated: boolean;
}
