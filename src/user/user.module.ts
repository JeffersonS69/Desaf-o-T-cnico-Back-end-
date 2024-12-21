import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret:
        '1f8e2c5e6d134a8f9d7a834b8d72e0a8b9d4f8c5e6d1a2b3c4d5e6f7g8h9i0j1',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {}
