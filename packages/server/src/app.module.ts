import { Module } from '@nestjs/common';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";
import { Tag } from "./entities/tag.entity";
import { ArticleModule } from './modules/article/article.module';
import { Article } from "./entities/article.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'blog',
      synchronize: true,
      logging: false,
      entities: ["dist/**/*.entity{.ts,.js}"],
      poolSize: 10,
    }),
    TagModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [],
})
export class AppModule {}
