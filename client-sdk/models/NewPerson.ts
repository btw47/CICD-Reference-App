/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Person, 'id'>, schemaOptions: { title: 'NewPerson', exclude: [ 'id' ] })
 */
export type NewPerson = {
    firstName?: string;
    lastName: string;
};

