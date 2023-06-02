import { ElasticValueType } from "./enums";
import { ElasticBodyType } from "./enums/elasticBodyType";

export class Any {
    type: ElasticValueType;
    field: string;
    value: string;
    constructor(type: ElasticValueType, field: string, value: string) {
        this.type = type
        this.field = field
        this.value = value
    }
}

export class All {
    type: ElasticBodyType;
    any: Any[];
    all?: Any;
    constructor(type: ElasticBodyType, any: Any[], all?: Any) {
        this.type = type
        this.any = any
        this.all = all
    }
}

export class Filter {
    type: string;
    all: All[];
    any?: Any;
    constructor(type: ElasticBodyType, all: All[], any?: Any) {
        this.type = type
        this.all = all
        this.any = any
    }
}