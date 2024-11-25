export interface ArticulosAllResponse {
    ok:        boolean;
    articulos: Articulo[];
}

export interface Articulo {
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
    text:  string;
    level: number;
}
