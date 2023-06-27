import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';
import { match } from 'assert';

@Injectable()
export class MatchService {
  constructor(@InjectRepository(Match) private MacthRepo: Repository<Match>) {}
  async create(Match: CreateMatchDto) {
    const macth = await this.MacthRepo.create(Match);
    await this.MacthRepo.save(Match);

    return macth;
  }

  findAll() {
    return this.MacthRepo.find();
  }

  async findOne(id: number) {
    const macth = await this.MacthRepo.findOne(id);
    if (macth) {
      return macth;
    }
    throw new HttpException('nott found', HttpStatus.NOT_FOUND);
  }

  async update(id: number, macth: UpdateMatchDto) {
    await this.MacthRepo.update(id, macth);
    const updated = await this.MacthRepo.findOne(id);
    if (updated) {
      return updated;
    }
    throw new HttpException('not found', HttpStatus.NOT_FOUND);
  }

   async remove(id: number) {
    const deleted = await this.MacthRepo.delete(id);
    if (!deleted.affected) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }
}
