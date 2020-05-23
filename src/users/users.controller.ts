import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { UsersService } from './users.service';
import  { User} from './user.model';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() : User[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOneUser(@Param('id') id: string) : User {
        return this.usersService.findOneUser(id);
    }

    @Post()
    createUser(@Body() createbodyto: CreateUserDto) : User {
        return this.usersService.createUser(createbodyto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): User {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.usersService.deleteUser(id);
    }
}
