import {expect} from '@loopback/testlab';
import {Person} from '../../../models';

describe('Person model', () => {
  describe('getFullName', () => {
    const mockFirst = 'mock-first-name';
    const mockLast = 'mock-last-name';

    const person = new Person({firstName: mockFirst, lastName: mockLast});

    expect(person.getFullName()).to.equal(`${mockFirst} ${mockLast}`);
  });
});
