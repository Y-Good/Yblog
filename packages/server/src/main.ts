import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3000);
    Logger.log('http://localhost:3000', '服务启动成功');
}

bootstrap();
