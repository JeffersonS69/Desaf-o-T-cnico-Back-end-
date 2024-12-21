import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto, UserDto } from 'src/user/dtos';
import { UserService } from 'src/user/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() userData: UserDto) {
    return this.userService.register(userData);
  }

  @Post('login')
  login(@Body() credential: LoginDto) {
    return this.userService.login(credential.email, credential.password);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAll();
  }
}
