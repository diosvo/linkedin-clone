import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {

  constructor(private readonly service: FeedService) { }

  @Get()
  all(): Observable<Array<FeedPost>> {
    return this.service.all();
  }

  @Post()
  create(@Body() post: FeedPost): Observable<FeedPost> {
    return this.service.create(post);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() post: FeedPost
  ): Observable<UpdateResult> {
    return this.service.update(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.service.delete(id);
  }
}
