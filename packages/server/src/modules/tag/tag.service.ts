import { HttpException, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../../entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    try {
      let tag: Tag = new Tag();
      tag.name = createTagDto.name;
      return await this.tagRepository.save(tag);
    } catch (e) {
      new HttpException('系统错误', 500);
    }
  }

  findAll() {
    return this.tagRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  async update(updateTagDto: UpdateTagDto) {
    let tag = await this.tagRepository.findOneBy({ id: updateTagDto.id });
    tag.name = updateTagDto.name;
    return await this.tagRepository.save(tag);
  }

  async remove(ids: number[]) {
    let res = await this.tagRepository.delete(ids);
    return res.affected;
  }
}
