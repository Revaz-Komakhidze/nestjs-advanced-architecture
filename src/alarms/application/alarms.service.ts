import { Injectable } from '@nestjs/common';
import { CreateAlarmDto } from '../presenters/http/dto/create-alarm.dto';

@Injectable()
export class AlarmsService {
  create(createAlarmDto: CreateAlarmDto) {
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarms`;
  }
}
