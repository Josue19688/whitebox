export interface AuthResponse {
    user:  User;
    token: string;
}

export interface User {
    id:       string;
    correo:   string;
    nombre:   string;
    activo:   boolean;
    roles:    string[];
    imagenes: string[];
}
