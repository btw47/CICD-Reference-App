import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbPersonDataSource} from '../datasources';
import {Person, PersonRelations} from '../models';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id,
  PersonRelations
> {
  constructor(@inject('datasources.db_person') dataSource: DbPersonDataSource) {
    super(Person, dataSource);
  }
}
