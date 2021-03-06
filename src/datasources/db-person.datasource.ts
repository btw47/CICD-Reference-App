import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db_person',
  connector: 'memory',
  localStorage: '',
  file: '',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbPersonDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'db_person';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db_person', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
