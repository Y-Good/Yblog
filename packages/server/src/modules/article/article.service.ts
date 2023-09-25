import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Repository } from 'typeorm';
import { Article } from '../../entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.save(createArticleDto);
  }

  findAll() {
    return this.articleRepository.find({
      where: { _live: 1 },
      order: {
        created_at: 'DESC',
      },
    });
  }

  findOne(id: number) {
    return this.articleRepository.findOneBy({ id: id, _live: 1 });
  }

  async update(updateArticleDto: UpdateArticleDto) {
    let article: Article = await this.articleRepository.findOneBy({
      id: updateArticleDto.id,
    });
    article.title = updateArticleDto.title;
    article.content = updateArticleDto.content;
    return (await this.articleRepository.save(article)).id;
  }

  async remove(id: number) {
    let article = await this.articleRepository.findOneBy({ id: id, _live: 1 });
    if (article) {
      article._live = 0;
      let res = await this.articleRepository.save(article);
      return !!res;
    }
    return false;
  }
}
