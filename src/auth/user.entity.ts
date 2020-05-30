import {Entity, Column} from 'typeorm';
import { UserRole } from './user-role.enum';
import { MainEntity } from '../extension/main.entity';

@Entity()
export class User extends MainEntity {

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	passwword: string;

	@Column()
	role: UserRole;

}
