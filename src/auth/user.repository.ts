import { Repository,EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRole } from "./user-role.enum";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async register(createUserDto : CreateUserDto) {
        const {name,email, password,role} = createUserDto;
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.role = UserRole.USER;
        await user.save();
        return user;
    }
}