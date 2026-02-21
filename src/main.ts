import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import expressLayouts from 'express-ejs-layouts';
import { join } from 'path';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  
  app.use(expressLayouts);

  app.set('layout', 'layouts/main-layout');

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.setViewEngine('ejs');

  const port = configService.get<number>('PORT') || 8646;

  await app.listen(port);
  
  const { default: open } = await import('open');
  await open(`http://localhost:${port}`);
}
bootstrap();
