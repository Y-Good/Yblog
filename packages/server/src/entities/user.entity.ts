import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";

@Entity('user')
 export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: string;

 @OneToMany(type => Article, article => article.author)
 articles: Article[];
}
