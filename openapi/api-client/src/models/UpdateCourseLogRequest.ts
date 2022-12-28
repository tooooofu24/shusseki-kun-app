/* tslint:disable */
/* eslint-disable */
/**
 * 出席くんAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateCourseLogRequest
 */
export interface UpdateCourseLogRequest {
    /**
     * 
     * @type {number}
     * @memberof UpdateCourseLogRequest
     */
    courseId?: number;
    /**
     * 
     * @type {Date}
     * @memberof UpdateCourseLogRequest
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof UpdateCourseLogRequest
     */
    period?: number;
}

/**
 * Check if a given object implements the UpdateCourseLogRequest interface.
 */
export function instanceOfUpdateCourseLogRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateCourseLogRequestFromJSON(json: any): UpdateCourseLogRequest {
    return UpdateCourseLogRequestFromJSONTyped(json, false);
}

export function UpdateCourseLogRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCourseLogRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'courseId': !exists(json, 'courseId') ? undefined : json['courseId'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'period': !exists(json, 'period') ? undefined : json['period'],
    };
}

export function UpdateCourseLogRequestToJSON(value?: UpdateCourseLogRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'courseId': value.courseId,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'period': value.period,
    };
}

