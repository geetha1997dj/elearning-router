import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ErrorFilter } from './error/error.filter';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { join } from 'path';
import { createConnection } from 'typeorm';
import { LoggingInterceptor } from 'src/common/logging.interceptor';

//const Sentry = require("@sentry/node");
//Sentry.init({ dsn: "http://b2a2531c64034098976a87bc537dd0b5@13.233.223.77:9000/4" });

async function bootstrap() {
  try {
    await createConnection({
      name: 'master',
      type: 'mysql',
      host: 'e-learning-aurora-db.cluster-c6lwyymuriji.ap-south-1.rds.amazonaws.com',
      port: 3306,
      username: 'auroraadmin',
      password: 'WYU01c2vf3jkvGgHEcmB',
      database: 'test_master',
      entities: ['dist/src/shared/mysql-entity/*.entity.js'],
      logging: ['query', 'error'],
      logger: 'file',
      extra: { timezone: '+5:30' },
      ssl: false,
      synchronize: false,
    })
  }catch(e){
    return console.log("Error", e);

  }
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  app.setViewEngine('hbs');
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new ErrorFilter());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map(error => {
          if (
            typeof error.constraints == 'undefined' &&
            error.children.length
          ) {
            const childError: ValidationError[] = error.children;
            if (childError.length) {
              const childMessages = childError.map(child => {
                const babyError: ValidationError[] = child.children;
                const babyMessage = babyError.map(
                  babe => `${Object.values(babe.constraints).join(', ')}`,
                );
                return babyMessage[0];
              });
              return childMessages[0];
            }
          } else {
            return `${Object.values(error.constraints).join(', ')}`;
          }
        });
        return new BadRequestException(messages[0]);
      },
      transform: true,
    }),
  );
  await app.startAllMicroservicesAsync();
  await app.listen(8000);
}
bootstrap();