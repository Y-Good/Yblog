import { HttpException, Injectable, Logger } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user: User = await this.userRepository.findOneBy({
      number: createUserDto.number,
    });
    if(user){
      throw new HttpException('用户已存在', 400);
    }

    const newUser: User = new User();
    newUser.name = createUserDto.name;
    newUser.number = createUserDto.number;
    newUser.password = createUserDto.password;

    try {
      await this.userRepository.save(newUser);
      return '注册成功';
    } catch(e) {
      Logger.error(e, UserService);
      return '注册失败';
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(user: LoginUserDto) {
    return await this.userRepository.findOneBy({number: user.number, password: user.password});
  }
}
