import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class CreateManyUsersDTO {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDTO)
  users: CreateUserDTO[];
}
