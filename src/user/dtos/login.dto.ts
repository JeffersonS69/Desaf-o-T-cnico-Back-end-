import { IsNotEmpty, IsString } from 'class-validator';
import {
  messageParamEmailNull,
  messageParamEmailString,
  messageParamPasswordNull,
  messageParamPasswordString,
} from '../constants/message';

export class LoginDto {
  @IsNotEmpty({ message: messageParamEmailNull })
  @IsString({ message: messageParamEmailString })
  email: string;

  @IsNotEmpty({ message: messageParamPasswordNull })
  @IsString({ message: messageParamPasswordString })
  password: string;
}
