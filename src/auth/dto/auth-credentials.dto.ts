import { IsString, IsEmail, MinLength, MaxLength } from "class-validator";

export class AuthCredentialsDto {
    @IsEmail()
    username: string;

    @IsString()
    @MinLength(6, {message: "Atleast six characters"})
    @MaxLength(20, {message: 'Password is too long'})
    password: string;

}