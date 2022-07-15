import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  constructor(data?: Partial<Person>) {
    super(data);
  }

  getFullName(): string {
    return `${this.firstName ?? ''} ${this.lastName}`.trim();
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
