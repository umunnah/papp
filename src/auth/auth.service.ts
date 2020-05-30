import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

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
}
