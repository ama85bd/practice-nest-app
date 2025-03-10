import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Test song');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'One song';
  }

  @Put(':id')
  update() {
    return 'One song updated';
  }

  @Delete(':id')
  delete() {
    return 'One song deleted';
  }
}
