import {Client} from '@loopback/testlab';
import {CicdReferenceAppApplication} from '../../application';
import {setupApplication} from '../helpers/test-helper';

describe('PingController integration', () => {
  let app: CicdReferenceAppApplication;
  let client: Client;

  beforeEach(async () => {
    ({app, client} = await setupApplication());
  });

  afterAll(async () => {
    await app.stop();
  });

  describe('ping()', () => {
    it('should return 200', async () => {
      const res = await client.get('/ping');
      expect(res.statusCode).toBe(200);
    });
  });
});
