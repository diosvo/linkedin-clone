import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';

@Injectable()
export class FeedService {

  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly repo: Repository<FeedPostEntity>
  ) { }

  all(): Observable<Array<FeedPost>> {
    return from(this.repo.find());
  }

  create(post: FeedPost): Observable<FeedPost> {
    return from(this.repo.save(post));
  }

  update(id: number, post: FeedPost): Observable<UpdateResult> {
    return from(this.repo.update(id, post));
  }

  delete(id: number): Observable<DeleteResult> {
    return from(this.repo.delete(id));
  }
}
