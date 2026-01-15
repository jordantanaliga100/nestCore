/* eslint-disable no-unsafe-finally */
import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateManyUsersDTO } from '../dtos/create-many-users.dto';
import { User } from '../user.entity';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}
  public async createMany(createManyUsersDto: CreateManyUsersDTO) {
    const newUsers: User[] = [];
    // query runner isntance
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      // connect instance to data source
      await queryRunner.connect();
      // start transaction
      await queryRunner.startTransaction();
    } catch (error) {
      if (error)
        throw new RequestTimeoutException('Couldn not connect to the database');
    }

    try {
      for (const user of createManyUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);

        newUsers.push(result);
      }
      // ->  if successful, commit
      await queryRunner.commitTransaction();
    } catch (error) {
      // ->  if not, rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction', {
        description: String(error),
      });
    } finally {
      try {
        await queryRunner.release();
      } catch (error) {
        throw new RequestTimeoutException('Could not realease the connection', {
          description: String(error),
        });
      }
      // release connection
    }
    return { users: newUsers };
  }
}
