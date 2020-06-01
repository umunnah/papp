import { Repository,EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRole } from "./user-role.enum";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	async register(createUserDto : CreateUserDto) {
		const {name,email, password,role} = createUserDto;

		const salt = await bcrypt.genSalt(10);

		const user = new User();
		user.name = name;
		user.email = email;
		user.salt = salt;
		user.password = await this.hashPassword(password,salt);
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

	private async hashPassword(password: string, salt: string): Promise<string> {
		return await bcrypt.hash(password,salt);
	}
}