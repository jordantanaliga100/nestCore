/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Must be a string, not a number' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  @MaxLength(96, { message: 'Name cannot exceed 96 characters' })
  name: string;

  @IsString({ message: 'Must be a string, not a number' })
  @IsOptional()
  @MinLength(3, { message: 'Last name must be at least 3 characters' })
  @MaxLength(96, { message: 'Last name cannot exceed 96 characters' })
  lastName?: string;

  @IsEmail({}, { message: 'Must be a valid email address' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    {
      message:
        'Password must contain at least one uppercase, one number, and one special character',
    },
  )
  password: string;
}
