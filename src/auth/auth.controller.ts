import { Controller, Get, UsePipes, ValidationPipe, Body, Post, Param, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
	constructor (private authService: AuthService) {}

	@Post()
	@UsePipes(ValidationPipe)
	createUser(@Body() createUserDto: CreateUserDto) {
		return createUserDto;
	}

	@Get('/:id')
	getUser(@Param('id', ParseIntPipe) id:number): Promise<User> {
		return this.authService.getUser(id);
	}
  
}
