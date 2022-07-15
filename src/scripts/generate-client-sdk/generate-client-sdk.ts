import {CicdReferenceAppApplication} from '../../application';

const output = './openapi-spec.json';

async function exportOpenApiSpec() {
  const app = new CicdReferenceAppApplication();
  await app.boot();
  await app.exportOpenApiSpec(output);
}
exportOpenApiSpec().catch(err => {
  console.error('Error exporting OpenAPI spec: ', err);
});
