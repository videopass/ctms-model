import { Segment } from "./segment";

export interface Layer {
    name: string;
    segments?: Segment[];
}
