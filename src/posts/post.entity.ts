import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  _id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
