import { Repository,EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRole } from "./user-role.enum";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	async register(createUserDto : CreateUserDto) {
		const {name,email, password,role} = createUserDto;
		const user = new User();
		user.name = name;
		user.email = email;
		user.password = password;
		user.role = UserRole.USER;
		try {
			await user.save();
			return user;
		} catch (err) {
			if (err.code === '23505') {
				throw new ConflictException('Username already exists');
			} else {
				throw new InternalServerErrorException();
			}
		}
		
	}

	// async delete (id: number) {

	// }
}