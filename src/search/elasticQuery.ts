import {  ElasticGroupType, ElasticValueType } from "./enums"

export class Query {
    querystring: string
    fields?: string[]
    constructor(querystring: string, fields?: string[]) {
        this.querystring = querystring
        this.fields = fields
    }
}

export class DateQuery {
    type: ElasticValueType
    value: string
    field: string
    constructor(type: ElasticValueType, field: string, value: Date) {
        this.type = type
        this.field = field
        this.value = value.toISOString()
    }
}

export interface QueryGroup {
    type?: ElasticGroupType;
    condition: string;
    queries: Query[] | QueryGroup[] | DateQuery[];
}