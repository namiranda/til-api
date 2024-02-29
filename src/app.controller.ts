import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostDTO } from './post.dto';
import { PostService } from './posts/post.service';

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Get('posts')
  findAll() {
    return this.postService.findAll();
  }

  @Post('posts')
  create(@Body() postDto: PostDTO): PostDTO {
    this.postService.create(postDto);
    return postDto;
  }
}
