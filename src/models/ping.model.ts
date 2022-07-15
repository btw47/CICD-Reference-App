import {Model, model, property} from '@loopback/repository';

@model()
export class Ping extends Model {
  @property({
    type: 'string',
  })
  greeting?: string;

  @property({
    type: 'date',
  })
  date?: Date;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'object',
  })
  headers?: object;

  constructor(data?: Partial<Ping>) {
    super(data);
  }
}

export interface PingRelations {
  // describe navigational properties here
}

export type PingWithRelations = Ping & PingRelations;
