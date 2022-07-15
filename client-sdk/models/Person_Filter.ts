/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Person_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    fields?: ({
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
    } | Array<'id' | 'firstName' | 'lastName'>);
};

