import { Application } from '@decorators/server';
import { HttpModule } from '@decorators/server/http';
import { json } from 'body-parser';
import * as session from 'express-session';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await Application.create(AppModule);
  const module = await app.inject<HttpModule>(HttpModule);

  module.set('view engine', 'ejs');
  module.set('views', join(__dirname, 'views'));
  module.use(json());
  module.use(session({
    secret: 'keyboard cat',
  }));

  await module.listen(3000);
  console.info('Server is running on port 3000');
}

bootstrap().catch(console.error);
