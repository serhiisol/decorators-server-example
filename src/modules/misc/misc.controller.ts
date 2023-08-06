import { Controller } from '@decorators/server';
import { Get } from '@decorators/server/http';

@Controller('', { ignoreVersion: true })
export class MiscController {
  @Get('*', 404)
  status404() {
    return 'not-found';
  }
}
