import { Controller } from '@decorators/server';
import { Body, Get, Params, Post, Response } from '@decorators/server/http';
import { IsString } from 'class-validator';

import { PostsService } from '../../services';
import { AccessParam } from './decorators';
// import { AccessPipe } from './pipes';

class PostType {
  @IsString()
  title: string;
}

class User {
  id: number;
  name: string;
}

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) { }

  @Post('', 200)
  create(@Body() post: PostType) {
    const list = this.postsService.getPosts();

    return [...list, post];
  }

  // @Pipe(AccessPipe)
  @Get(':id', 200)
  // @Render('post')
  post(
    @Params('id') id: string,
    @AccessParam() access: User,
    @Response() res,
  ) {
    res.render('post', { access, id });
    // return { access, id };
  }
}
