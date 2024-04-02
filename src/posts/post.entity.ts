import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  _id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  tags: Array<string>;

  toPostDTO() {
    return {
      title: this.title,
      content: this.content,
      tags: this.tags,
    };
  }
}
