import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Pagination } from "../../common/decorators/pagination";

@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  excludePrefixes: ['_'],
})
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Pagination() pagination:PageinationInterface) {
    const { page, pageSize } = pagination;
    return this.articleService.findAll(page, pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Post('update')
  update(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(updateArticleDto);
  }

  @Post('remove')
  remove(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.remove(updateArticleDto.id);
  }
}
