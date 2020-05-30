import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

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
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string;
}