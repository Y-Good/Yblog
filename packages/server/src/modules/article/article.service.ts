import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { FindManyOptions, Repository } from 'typeorm';
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

  async findAll(page: number, pageSize: number | undefined) {
    const query: FindManyOptions<Article> = {
      where: { _live: 1 },
      order: {
        created_at: 'DESC',
      },
    };

    if (pageSize !== undefined) {
      query.take = pageSize;
      query.skip = pageSize * page;
    }

    let data = await this.articleRepository.find(query);
    let count = await this.articleRepository.count(query);

    return {
      data: data,
      pageSize: pageSize,
      count: count,
    };
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
