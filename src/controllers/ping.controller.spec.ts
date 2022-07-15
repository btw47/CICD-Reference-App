import {Request} from '@loopback/rest';
import {stubExpressContext} from '@loopback/testlab';
import {Ping} from '../models';
import {PingController} from './ping.controller';

describe('PingController', () => {
  let req: Request;
  let controller: PingController;

  beforeEach(() => {
    req = stubExpressContext().request;
    controller = new PingController(req);
  });

  describe('ping()', () => {
    it('should return a greeting', () => {
      const res: Ping = controller.ping();

      expect(res.greeting).toContain('Hello');
      expect(res.date).toBeInstanceOf(Date);
      expect(res.url).toBe(req.url);
      expect(res.headers).toEqual(req.headers);
    });
  });
});
