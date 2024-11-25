export interface ArticuloDetailsResponse {
    id:        string;
    time:      string;
    blocks:    Block[];
    version:   string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Block {
    id:     string;
    data:   Data;
    type:   string;
    tunes?: Tunes;
}

export interface Data {
    text?:           string;
    level?:          number;
    file?:           File;
    caption?:        string;
    stretched?:      boolean;
    withBorder?:     boolean;
    withBackground?: boolean;
    meta?:           Meta;
    items?:          Item[];
    style?:          string;
}

export interface File {
    url: string;
}

export interface Item {
    meta:    Meta;
    items:   any[];
    content: string;
}

export interface Meta {
}

export interface Tunes {
    textAlignment: TextAlignment;
}

export interface TextAlignment {
    alignment: string;
}
