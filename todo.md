# TO DO

## Notes

- CI

  - lint
  - build
  - test

## Scenarios

- on push of branch
  - nothing
- on PR to stage
  - run CI
- on PR to master
  - run CI
- on push to stage (merge)
  - run CI
  - deploy to staging
    - refresh stage db with prod data
- on push to master (merge)
  - run CI
  - deploy to production
  - TO DO: limit what can be merged into master?
