export interface ArticulosPublicResponse {
    ok:       boolean;
    total:    number;
    pages:    number;
    articles: Article[];
}

export interface Article {
    id:        string;
    time:      string;
    createdAt: Date;
    blocks:    Block[];
}

export interface Block {
    id:   string;
    type: string;
    data: Data;
}

export interface Data {
    text?:  string;
    level?: number;
    file?:  File;
}

export interface File {
    url: string;
}
