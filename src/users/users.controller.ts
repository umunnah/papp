import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import { UsersService } from './users.service';
import  { User} from './interface/user.interface';

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
    createUser(@Body() createbodyto: CreateUserDto) : string {
        return `${createbodyto.email}`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): string {
        return `user with ${id} has been update with ${updateUserDto}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `user with ${id} has been deleted`;
    }
}
