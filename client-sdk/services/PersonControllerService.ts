/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { loopback_Count } from '../models/loopback_Count';
import type { NewPerson } from '../models/NewPerson';
import type { Person } from '../models/Person';
import type { PersonPartial } from '../models/PersonPartial';
import type { PersonWithRelations } from '../models/PersonWithRelations';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonControllerService {

    /**
     * @param where
     * @returns loopback_Count Person model count
     * @throws ApiError
     */
    public static personControllerCount(
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people/count',
            query: {
                'where': where,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static personControllerReplaceById(
        id: string,
        requestBody?: Person,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/people/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static personControllerUpdateById(
        id: string,
        requestBody?: PersonPartial,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/people/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param filter
     * @returns PersonWithRelations Person model instance
     * @throws ApiError
     */
    public static personControllerFindById(
        id: string,
        filter?: any,
    ): CancelablePromise<PersonWithRelations> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people/{id}',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static personControllerDeleteById(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/people/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Person Person model instance
     * @throws ApiError
     */
    public static personControllerCreate(
        requestBody?: NewPerson,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/people',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where
     * @param requestBody
     * @returns loopback_Count Person PATCH success count
     * @throws ApiError
     */
    public static personControllerUpdateAll(
        where?: any,
        requestBody?: PersonPartial,
    ): CancelablePromise<loopback_Count> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/people',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter
     * @returns PersonWithRelations Array of Person model instances
     * @throws ApiError
     */
    public static personControllerFind(
        filter?: any,
    ): CancelablePromise<Array<PersonWithRelations>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/people',
            query: {
                'filter': filter,
            },
        });
    }

}
