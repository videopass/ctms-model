import { Attribute } from "./attribute";

export interface Segment {
    id: string;
    start: number;
    duration: number;
    attributes?: Attribute[];
    userName?: string
}
