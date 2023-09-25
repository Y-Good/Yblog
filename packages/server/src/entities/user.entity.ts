import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from './article.entity';
import { Exclude } from "class-transformer";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:"Test"})
  name: string;

  @Column()
  number: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany((type) => Article, (article) => article.author)
  articles: Article[];
}
