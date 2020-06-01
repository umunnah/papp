import { IsString, IsEmail, IsNotEmpty, MinLength, Matches } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: "Atleast six characters"})
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/, 
    {message: 'Password is too weak'})
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;
}