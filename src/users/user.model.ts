export interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
    role: UserRole;
}

export enum UserRole {
	admin = 'admin',
	user = 'user',
}

