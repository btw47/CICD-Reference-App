/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Person_Filter1 = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: any;
    fields?: ({
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
    } | Array<'id' | 'firstName' | 'lastName'>);
};

