import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class OptionalParseIntPipe implements PipeTransform<
  string | undefined,
  number | undefined
> {
  transform(
    value: string | undefined,
    metadata: ArgumentMetadata,
  ): number | undefined {
    if (value === undefined) return undefined;
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException(`${metadata.data} must be an integer `);
    }
    return val;
  }
}
