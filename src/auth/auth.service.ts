import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

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
}
