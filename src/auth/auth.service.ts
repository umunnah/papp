import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserRepository)
		private userRepo: UserRepository,
	) {}

	async getUser(id: number): Promise<User> {
		const found = await this.userRepo.findOne(id);
		if (!found) {
			throw new NotFoundException('Resource not found');
		}
		return found;

	}

	async getUsers(): Promise<User[]> {
		return await this.userRepo.find();
	}

	async register(createUserDto : CreateUserDto): Promise<User> {
		return await this.userRepo.register(createUserDto);
	}

	async signin(authCredentialDto : AuthCredentialsDto): Promise<User> {
		return await this.userRepo.signin(authCredentialDto);
	}

	async delete(id: number): Promise<void> {
		const user =  await this.userRepo.findOne(id);
		if (!user) {
			throw new NotFoundException('Resource not found');
		}
		user.remove();
	}
}
