import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Post } from './posts/post.entity';
import { PostModule } from './posts/post.module';
import { PostService } from './posts/post.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://usr:pass@cluster',
      entities: [Post],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostModule, PostService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
