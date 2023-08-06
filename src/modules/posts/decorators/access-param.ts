import { createParamDecorator } from '@decorators/server';
import { HttpContext } from '@decorators/server/http';
import { Request } from 'express';

export function AccessParam() {
  return createParamDecorator((context: HttpContext) => {
    const req = context.getRequest<Request>();

    req['user'] = { id: 1, name: 'John Doe' };

    return req['user'];
  });
}
