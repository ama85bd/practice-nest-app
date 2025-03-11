import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    try {
      return this.songs;
    } catch (error) {
      throw new Error('Error in DB with fatching data!');
    }
  }
}
