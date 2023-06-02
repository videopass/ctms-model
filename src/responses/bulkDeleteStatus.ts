export interface BulkDeleteStatusResponse {
    version: string;
    command: Command;
    payload: Payload;
    _links: Links;
}

interface Links {
    self: Self;
    curies: Cury[];
}

interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

interface Self {
    href: string;
}

interface Payload {
    'command-parameters': CommandParameters;
    result: Result[];
    details: Details;
}

interface Details {
    metadata: Metadata;
    media: Media;
}

interface Media {
    'in-use': number;
    reserved: number;
    'access-denied': number;
    deleted: number;
    'failed-to-delete': number;
}

interface Metadata {
    'file-assets': number;
    folders: number;
    assets: number;
    reserved: number;
    'online-media-references': number;
    referenced: number;
    'not-found': number;
    'already-scheduled': number;
    'last-reference': number;
    'not-in-folder': number;
}

interface Result {
    success: boolean;
    data: string;
    httpStatus: number;
    errorMessage: string;
}

interface CommandParameters {
    ids: string[];
}

interface Command {
    type: string;
    id: string;
    state: State;
    progress: number;
    serviceName: string;
    serviceInstance: string;
    serviceVersion: string;
    lifecycle: string;
    created: string;
    modified: string;
}

interface State {
    text: string;
    code: string;
}