export interface CreateUserDto {
    email: string;
    phoneNumber: string;
    password: string;
    country: string;
    instructor?: boolean;
}


export interface LoginDto {
    email: string;
    password: string;
}