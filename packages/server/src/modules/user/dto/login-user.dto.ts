import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能是字母、数字或者 #、$、%、_、- 这些字符'
  })
  number: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
