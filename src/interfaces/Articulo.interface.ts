

export interface ArticuloData {
    time: number;
    blocks: object[];  // O puedes definir un tipo más específico si lo prefieres
    version: string;
}

export interface PostArticuloResponse {
    ok:        boolean;
    articulos: Articulos;
}

export interface Articulos {
    time:      number;
    blocks:    Block[];
    version:   string;
    id:        string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Block {
    id:     string;
    type:   string;
    data:   Data;
    tunes?: Tunes;
}

export interface Data {
    text?:           string;
    level?:          number;
    caption?:        string;
    withBorder?:     boolean;
    withBackground?: boolean;
    stretched?:      boolean;
    file?:           File;
    style?:          string;
    meta?:           DataMeta;
    items?:          Item[];
}

export interface File {
    url: string;
}

export interface Item {
    content: string;
    meta:    any;
    items:   any[];
}


export interface DataMeta {
    counterType?: string;
}

export interface Tunes {
    textAlignment: TextAlignment;
}

export interface TextAlignment {
    alignment: string;
}
