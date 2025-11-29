import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetUsersRouteParamDto {
  @ApiPropertyOptional({
    description: '💁 Get user with a specific ID',
    example: 123,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;

  @IsOptional()
  @IsString()
  category?: string;
}

export class GetUserQueryParamDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page?: number = 1;
}

// ❗doesnt make sense to have optional id
export class GetUserRouteParamRequiredDto {
  @IsNotEmpty({ message: 'ID is required' })
  @IsInt({ message: 'ID must be an integer' })
  @Type(() => Number)
  id!: number;
}
