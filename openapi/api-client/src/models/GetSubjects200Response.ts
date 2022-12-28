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
import type { Subject } from './Subject';
import {
    SubjectFromJSON,
    SubjectFromJSONTyped,
    SubjectToJSON,
} from './Subject';

/**
 * 
 * @export
 * @interface GetSubjects200Response
 */
export interface GetSubjects200Response {
    /**
     * 
     * @type {Subject}
     * @memberof GetSubjects200Response
     */
    data?: Subject;
}

/**
 * Check if a given object implements the GetSubjects200Response interface.
 */
export function instanceOfGetSubjects200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetSubjects200ResponseFromJSON(json: any): GetSubjects200Response {
    return GetSubjects200ResponseFromJSONTyped(json, false);
}

export function GetSubjects200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSubjects200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : SubjectFromJSON(json['data']),
    };
}

export function GetSubjects200ResponseToJSON(value?: GetSubjects200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubjectToJSON(value.data),
    };
}

