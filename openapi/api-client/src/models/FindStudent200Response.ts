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
 * @interface FindStudent200Response
 */
export interface FindStudent200Response {
    /**
     * 
     * @type {Student}
     * @memberof FindStudent200Response
     */
    data?: Student;
}

/**
 * Check if a given object implements the FindStudent200Response interface.
 */
export function instanceOfFindStudent200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FindStudent200ResponseFromJSON(json: any): FindStudent200Response {
    return FindStudent200ResponseFromJSONTyped(json, false);
}

export function FindStudent200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindStudent200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : StudentFromJSON(json['data']),
    };
}

export function FindStudent200ResponseToJSON(value?: FindStudent200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': StudentToJSON(value.data),
    };
}

