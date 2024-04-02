import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDTO } from 'src/posts/post.dto';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('posts')
  findAll() {
    return this.postService
      .findAll()
      .then((posts) => posts.map((post) => post.toPostDTO()));
  }

  @Post('posts')
  create(@Body() postDto: PostDTO): PostDTO {
    this.postService.create(postDto);
    return postDto;
  }
}
