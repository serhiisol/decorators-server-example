import { Module } from '@decorators/server';

import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  namespace: 'posts',
})
export class PostsModule { }
