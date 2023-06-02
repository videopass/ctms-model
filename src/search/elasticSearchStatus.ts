import { Expression } from "./elasticQueryExpression";

export interface ElasticSearchStatus {
    id: string;
    self: string;
    complete: boolean;
    expression: Expression;
    progress: Progress;
    results?: result[];
    error?: any;
    facets_uri: string;
    statistics?: any;
    warnings: Warnings;
}

interface Warnings {
    metadata: any[];
    phonetic: any[];
}

interface Progress {
    status: string;
    percentage_complete: number;
    time_elapsed_ms: number;
    time_remaining_ms?: any;
    processed_count: number;
    processed_count_with_hits: number;
    processed_duration_ms: number;
}

interface result {
    self: string
    count: number
    duration_ms: number,
    pages: string[]
}