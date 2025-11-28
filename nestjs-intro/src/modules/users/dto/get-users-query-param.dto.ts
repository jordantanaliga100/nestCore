/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetUsersParamDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  username?: string;
}

export class GetUserQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number = 1;
}

export class GetUserParamRequiredDto {
  @IsInt({ message: 'ID must be an integer' })
  @Type(() => Number)
  id!: number;
}
