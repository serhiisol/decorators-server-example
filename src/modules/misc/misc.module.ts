import { Module } from '@decorators/server';

import { MiscController } from './misc.controller';

@Module({
  controllers: [MiscController],
})
export class MiscModule { }
