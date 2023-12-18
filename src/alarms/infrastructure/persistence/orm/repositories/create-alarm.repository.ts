import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alarm } from '../../../../domain/alarm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarms.repository';

@Injectable()
export class OrmCreateAlarmRepository implements CreateAlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async save(alarm: Alarm): Promise<Alarm> {
    const persistenceModel = AlarmMapper.toPersistence(alarm);
    const newEntity = await this.alarmRepository.save(persistenceModel);
    return AlarmMapper.toDomain(newEntity);
  }
}
