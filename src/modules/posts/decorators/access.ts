import { Decorate } from '@decorators/server';

export function Access(access: string) {
  return Decorate('access', access);
}
