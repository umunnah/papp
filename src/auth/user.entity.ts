import {Entity, Column, Unique} from 'typeorm';
import { UserRole } from './user-role.enum';
import { MainEntity } from '../extension/main.entity';
import * as bcrypt from "bcrypt";

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
	salt: string;

	@Column()
	role: UserRole;

	async validatePaassword(password: string): Promise<boolean> {
		const hash = await bcrypt.hash(password, this.salt);
		return hash === this.password ? true: false;
	}

}
