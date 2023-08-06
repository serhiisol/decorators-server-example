import { Injectable } from '@decorators/server';

@Injectable()
export class PostsService {
  getPosts() {
    return [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        id: 1,
        title: 'Lorem ipsum',
      },
    ];
  }
}
