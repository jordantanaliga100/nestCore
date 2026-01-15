import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { User } from '../user.entity';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}
  public async createMany(createUsersDto: CreateUserDTO[]) {
    const newUsers: User[] = [];
    // query runner isntance
    const queryRunner = this.dataSource.createQueryRunner();
    // connect instance to data source
    await queryRunner.connect();
    // start transaction
    await queryRunner.startTransaction();
    try {
      for (const user of createUsersDto) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);

        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      if (error) {
        await queryRunner.rollbackTransaction();
      }
    } finally {
      await queryRunner.release();
    }
    return newUsers;
    // ->  if successful, commit
    // ->  if not, rollback
    // release connection
  }
}
