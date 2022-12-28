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
import type { Student } from './Student';
import {
    StudentFromJSON,
    StudentFromJSONTyped,
    StudentToJSON,
} from './Student';

/**
 * 
 * @export
 * @interface GetStudents200Response
 */
export interface GetStudents200Response {
    /**
     * 
     * @type {Array<Student>}
     * @memberof GetStudents200Response
     */
    data?: Array<Student>;
}

/**
 * Check if a given object implements the GetStudents200Response interface.
 */
export function instanceOfGetStudents200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetStudents200ResponseFromJSON(json: any): GetStudents200Response {
    return GetStudents200ResponseFromJSONTyped(json, false);
}

export function GetStudents200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStudents200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(StudentFromJSON)),
    };
}

export function GetStudents200ResponseToJSON(value?: GetStudents200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(StudentToJSON)),
    };
}

