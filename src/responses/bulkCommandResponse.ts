export interface BulkCommandResponse {
    version: string;
    command: Command;
    payload: Payload;
    _links: Links;
}

interface Links {
    self: Self;
    'command:cancel': Self;
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
}

interface CommandParameters {
    ids: string[];
}

interface Command {
    type: string;
    id: string;
    serviceName: string;
    serviceInstance: string;
    serviceVersion: string;
    lifecycle: string;
    created: string;
    modified: string;
}