import { Injectable } from '@nestjs/common';
import { User, UserRole } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
		{
			id: "90u4309jfh8y89",
			name: "lawrence",
			email: "yahoo@yahoo.com",
			password: "123456",
			role: UserRole.admin 
		},
		{
			id: "90u4309jfh8y998yy",
			name: "Arinze",
			email: "gmail@gmail.com",
			password: "123456",
			role: UserRole.user
		},
	];

	findAll(): User[] {
		return this.users;
	}

	findOneUser(id: string): User {
		return this.users.find(user => user.id === id);
	}

	createUser(createUserDto : CreateUserDto): User {
		const { name,email} = createUserDto;
		const user: User = {
			id: "90u4309jfh8y998848u",
			name: name,
			email: email,
			password: "123456",
			role: UserRole.admin
		};
		this.users.push(user);
		return user;
	}

	updateUser(id: string, updateUserDto : CreateUserDto): User {
		const { name } = updateUserDto;
		const user = this.findOneUser(id);
		user.name = name
		return user;
	}

	deleteUser(id: string):void {
		const users =  this.users.filter(user => user.id === id);
	}
}
