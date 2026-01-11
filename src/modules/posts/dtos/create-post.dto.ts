import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreatePostMetaOptionsDTO } from '../../meta-options/dtos/create-post-metaOptions.dto';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';

export class CreatePostDTO {
  @ApiProperty({
    example: 'This is a title',
    description: 'This is the title of the blog post',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @MaxLength(512)
  title: string;

  @ApiProperty({
    enum: postType,
    description: "Possible values,'post''page' 'story' 'series'",
    example: 'post',
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    description: "For example - 'my-url'",
    example: 'my-blog-post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9-]+$/, {
    message:
      'Slug must be lowercase letters, numbers, and hyphens only. Example: "my-url"',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: "Possible values,'draft' 'scheduled' 'review' 'published'",
    example: 'draft',
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: 'Post content ',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description: 'Serialize a JSON object else a validation error will thrown',
    example: '{"layout":"default","seo":{"title":"My First Post"}}',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Featured image for your blog post',
    example: 'https://example.com/image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date on which a blog post is posted',
    example: '2025-11-30T10:00:00Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    description: 'Array of tags as a string values',
    example: ['tech', 'guide', 'nestjs'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, {
    each: true,
  })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The metavalue is a json string',
          example: '{"sidebarEnable": true}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDTO)
  metaOptions?: CreatePostMetaOptionsDTO;
}
