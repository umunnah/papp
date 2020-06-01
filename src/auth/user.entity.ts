import {Entity, Column, Unique} from 'typeorm';
import { UserRole } from './user-role.enum';
import { MainEntity } from '../extension/main.entity';

@Entity()
@Unique(['email'])
export class User extends MainEntity {

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	role: UserRole;

}
