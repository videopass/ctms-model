import { Avid } from "./avid";

export interface ElasticSearchResult {
    catalog_item: CatalogItem;
    rank: number;
    score: number;
    hits: any[];
    summary: Summary;
    snippets: InterplayPam[];
}

interface Summary {
    hits: any[];
    timebased_hits: any[];
    query_scores: QueryScore[];
}

interface QueryScore {
    query_id: string;
    score: number;
    type: string;
}

interface CatalogItem {
    id: string;
    self: string;
    segments: string;
    external_id: ExternalId;
    version: number;
    metadata: Metadata;
    layers: InterplayPam;
    indexing_manifest: IndexingManifest;
}

interface IndexingManifest {
    phonetic: any[];
}

interface Metadata {
    payload: Payload;
}

interface Payload {
    avid: Avid;
    _: _;
    'interplay-pam': InterplayPam;
}

interface InterplayPam {
}

interface _ {
    source_type: string;
    source_display_name: string;
    source_item_type: string;
    source_item_created: string;
    source_item_creator: string;
    source_item_modified: string;
    source_item_modifier: string;
    title: string;
    has_video: boolean;
    has_audio: boolean;
    duration_ms: number;
    video_frame_rate: string;
    video_frame_count: number;
    video_starting_frame_number: number;
    start_timecode: string;
    end_timecode: string;
    duration_timecode: string;
    audio_only: boolean;
    ama_status: string;
    media_status: string;
    closed_caption: boolean;
}

interface ExternalId {
    source_id: string;
    item_id: string;
}