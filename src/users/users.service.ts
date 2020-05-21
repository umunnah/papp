import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
		{
			id: "90u4309jfh8y89",
			name: "lawrence",
			email: "yahoo@yahoo.com",
			password: "123456",
			role: "admin"
		},
		{
			id: "90u4309jfh8y998yy",
			name: "Arinze",
			email: "gmail@gmail.com",
			password: "123456",
			role: "user"
		},
	];

	findAll(): User[] {
		return this.users;
	}

	findOneUser(id: string): User {
		return this.users.find(user => user.id === id);
	}
}
