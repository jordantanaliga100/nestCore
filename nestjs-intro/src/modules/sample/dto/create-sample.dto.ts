/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

class AddressDto {
  @IsString()
  street: string = 'Mimosa St';

  @IsString()
  city: string = 'Cavite City';
}

export class CreateSampleDto {
  @IsString()
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  local: string = 'Ph';

  @IsString()
  @IsNotEmpty({ message: 'Name must not be empty' })
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsInt()
  @Min(0)
  @Transform(({ value }) => Number(value))
  @IsNotEmpty({ message: 'Age must not be empty' })
  age: number;

  @IsString()
  @IsNotEmpty({
    message: 'Description must not be empty',
  })
  @MinLength(10, { message: 'Description must be atleast 5 chars long' })
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @IsOptional()
  tags: string[] = ['pinoy', 'pinay', 'pogi'];

  @IsEnum(UserRole, { message: 'Role must be admin, user, or guest' })
  role: UserRole = UserRole.USER;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => (value === 'true' ? true : false)) // convert string "true"/"false" → boolean
  isActive: boolean = true; // default value

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  createdAt?: Date = new Date();

  @ValidateNested()
  @Type(() => AddressDto)
  @IsOptional()
  address: AddressDto = new AddressDto();
}
