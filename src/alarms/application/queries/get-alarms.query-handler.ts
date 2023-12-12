import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Alarm } from '../../domain/alarm';
import { GetAlarmsQuery } from './get-alarms.query';
import { AlarmRepository } from '../ports/alarms.repository';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(query: GetAlarmsQuery): Promise<Alarm[]> {
    query;
    return this.alarmRepository.findAll();
  }
}
