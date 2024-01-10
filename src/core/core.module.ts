import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from '../common/interfaces/application-bootstrap-options.interface';
import { EVENT_STORE_CONNECTION } from './core.constants';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            // Hardcoded the connection options for simplicity
            // TODO: use configuration file or environment variables
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              password: 'pass123',
              username: 'postgres',
              autoLoadEntities: true,
              synchronize: true,
            }),
            MongooseModule.forRoot('mongodb://localhost:27017/vf-read-db'),
            MongooseModule.forRoot('mongodb://localhost:27018/vf-event-store', {
              connectionName: EVENT_STORE_CONNECTION,
              directConnection: true,
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
