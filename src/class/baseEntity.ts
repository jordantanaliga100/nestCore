import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class TimestampedEntity {
  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
export abstract class SoftDeleteEntity extends TimestampedEntity {
  @DeleteDateColumn()
  deleteDate: Date;
}
