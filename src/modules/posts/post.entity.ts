import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MetaOption } from '../meta-options/meta-options.entity';
import { Tag } from '../tags/tags.entity';
import { User } from '../users/user.entity';
import { postStatus } from './enums/postStatus.enum';
import { postType } from './enums/postType.enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishOn?: Date;

  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: ['remove', 'insert'],
    // eager: true,
  })
  metaOptions?: MetaOption;

  @ManyToOne(() => User, (user) => user.posts, {
    // eager: true,
  })
  author: User;

  // this for uni-directional
  // @ManyToMany(() => Tag, {
  //   // eager: true,
  // })
  // @JoinTable()
  // tags?: Tag[];

  @ManyToMany(() => Tag, (tag) => tag.posts, {
    // eager: true,
  })
  @JoinTable()
  tags?: Tag[];
}
