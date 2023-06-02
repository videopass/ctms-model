export interface MediaInfo {
    displayName: string;
    parentFolderId: string;
    mobId: string;
    globalID: string;
    type: string;
    durationTimeCode: string;
    durationInFrames: number;
    fps: string;
    dropFrame: boolean;
    startTimeCode: string;
    clipOffset: number;
    markIn: string;
    markOut: string;
    path: string;
    format: string;
    currentVideoResolution: string;
    trackInfo: string;
    isEwc: boolean;
    versionNumber: number;
    modifiedDateRaw: string;
    modifiedDate: string;
    videoid: string;
    hasTTML: boolean;
    videoResolutions: VideoResolution[];
    isRemoteAsset: boolean;
    ServerName: string;
    permissions: Permission[];
    hasDRM: boolean;
    parentFolderBase: ParentFolderBase;
    base: ParentFolderBase;
}

interface ParentFolderBase {
    id: string;
    systemID: string;
    systemType: string;
    type: string;
}

interface Permission {
    permission: string;
    granted: boolean;
}

interface VideoResolution {
    vcid: number;
    displayname: string;
}