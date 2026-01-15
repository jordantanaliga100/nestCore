import { IntersectionType } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { PaginationQueryDTO } from '../../../common/pagination/dtos/pagination-query.dto';

class GetPostsBaseDTO {
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;
}

export class GetPostsDTO extends IntersectionType(
  GetPostsBaseDTO,
  PaginationQueryDTO,
) {}
