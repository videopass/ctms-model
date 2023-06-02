// http://developer.avid.com/ctms/api/rs_aa/rs_aa_attributes.html#_property_attributes
// http://developer.avid.com/ctms/api/rs_aa/rs_aa_attributes.html#_interplay_production_attributes
export interface Attribute {
	name: string
	value: string | number | Date | []
	type?: string /* PM attribute types are "string", "int", "boolean" or "datetime". */
}
