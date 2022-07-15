import {Person} from './person.model';

const mockFirst = 'mock-first-name';
const mockLast = 'mock-last-name';

describe('Person model', () => {
  describe('getFullName()', () => {
    it('should return first and last name', () => {
      const person = new Person({
        firstName: mockFirst,
        lastName: mockLast,
      });

      const res = person.getFullName();
      expect(res).toBe(`${mockFirst} ${mockLast}`);
    });

    it('should return trimmed last name if no first name exists', () => {
      const person = new Person({
        firstName: undefined,
        lastName: mockLast,
      });

      const res = person.getFullName();
      expect(res).toBe(mockLast);
      expect(res).not.toContain('undefined');
    });
  });
});
