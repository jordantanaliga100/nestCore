/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';

@Injectable()
export class SampleService {
  create(createSampleDto: CreateSampleDto) {
    const res = {
      message: `This action adds a new sample `,
      createSampleDto,
    };
    return res;
  }

  findAll(role?: string, year?: number) {
    if (typeof role === 'undefined' && typeof year === 'undefined') {
      return `You requested ALL users`;
    } else {
      return `You sent a GET request WITH PARAMS AND QUERY to the users endpoint  `;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} sample`;
  }

  update(id: number, updateSampleDto: UpdateSampleDto) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
