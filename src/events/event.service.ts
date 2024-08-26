import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

   findAll(): Promise<Event[]>  {
    return this.eventsRepository.find();
  }

   findOne(id: number) : Promise<Event>{
    return this.eventsRepository.findOneBy({ id });
  }

   create(event: Event) : Promise<Event>{
    return this.eventsRepository.save(event);
  }

   update(id: number, event: Event): Promise<Event> {
   this.eventsRepository.update(id, event);
    return this.findOne(id);
  }

    async delete(id: number): Promise<void>{
     await this.eventsRepository.delete(id);
  }
}