npx ts-node ./src/scripts/generate-client-sdk/generate-client-sdk.ts
echo "Exported OpenAPI spec."

npx openapi --input ./openapi-spec.json --output ./client-sdk --client axios
echo "Generated client SDK."

rm ./openapi-spec.json
echo "Clean up completed."
