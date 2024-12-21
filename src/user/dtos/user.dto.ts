import { IsNotEmpty, IsString } from 'class-validator';
import {
  messageParamEmailNull,
  messageParamEmailString,
  messageParamPasswordNull,
  messageParamPasswordString,
  messageParamUserNameNull,
  messageParamUserNameString,
} from '../constants/message';

export class UserDto {
  @IsNotEmpty({ message: messageParamUserNameNull })
  @IsString({ message: messageParamUserNameString })
  username: string;

  @IsNotEmpty({ message: messageParamEmailNull })
  @IsString({ message: messageParamEmailString })
  email: string;

  @IsNotEmpty({ message: messageParamPasswordNull })
  @IsString({ message: messageParamPasswordString })
  password: string;
}
