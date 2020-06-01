import { Controller, Get, UsePipes, ValidationPipe, Body, Post, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
	constructor (private authService: AuthService) {}

	@Post('/signup')
	@UsePipes(ValidationPipe)
	createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.authService.register(createUserDto);
	}

	@Post('/signin')
	signin(@Body(ValidationPipe) authCredentialDto: AuthCredentialsDto): Promise<User> {
		return this.authService.signin(authCredentialDto);
	}

	@Get('/:id')
	getUser(@Param('id', ParseIntPipe) id:number): Promise<User> {
		return this.authService.getUser(id);
	}

	@Get()
	getUsers(): Promise<User[]> {
		return this.authService.getUsers();
	}

	@Delete('/:id')
	deleteUser(@Param('id', ParseIntPipe) id:number): Promise<void> {
		return this.authService.delete(id);
	}
  
}
