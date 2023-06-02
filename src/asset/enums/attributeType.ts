// http://developer.avid.com/ctms/api/rs_aa/rs_aa_attributes.html#_interplay_production_attributes
export const userPropertyPrefix: string = 'com.avid.workgroup.Property.User.'
const systemPropertyPrefix = 'com.avid.workgroup.Property.System.'

export class SystemType {
	static readonly VideoId = `${systemPropertyPrefix}TapeID`
	static readonly Format = `${systemPropertyPrefix}Format`
}

export class AttributeType {
	static readonly System = SystemType
}
