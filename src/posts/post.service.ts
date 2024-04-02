import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { PostDTO } from 'src/posts/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find(
      { order: { _id: 'DESC' } },
    );
  }

  async create(post: PostDTO): Promise<Post> {
    return await this.postRepository.save(post);
  }
}
