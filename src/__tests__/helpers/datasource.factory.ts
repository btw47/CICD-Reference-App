import {juggler} from '@loopback/repository';

export const getDatasource = (name: string, connector = 'memory') => {
  return new juggler.DataSource({
    name,
    connector,
  });
};
