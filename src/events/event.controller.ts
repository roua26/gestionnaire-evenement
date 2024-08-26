import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.eventService.findOne(id);
  }

  @Post()
  async create(@Body() event: Event) {
    return this.eventService.create(event);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() event: Event) {
    return this.eventService.update(id, event);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.eventService.delete(id);
  }
}
