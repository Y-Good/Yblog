import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ValidationPipe,
  HttpException,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('create')
  create(@Body(ValidationPipe) createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }

  @Post('update')
  update(@Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(updateTagDto);
  }

  @Post('remove')
  remove(@Body('ids') ids: number[]) {
    return this.tagService.remove(ids);
  }
}
