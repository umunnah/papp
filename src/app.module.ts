import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

@Module({
  imports: [ 
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule],
})
export class AppModule {}
