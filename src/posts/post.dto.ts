import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class PostDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsArray()
  tags: Array<string>;
}
