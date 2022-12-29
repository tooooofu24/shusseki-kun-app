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
import type { ClassroomWithCourse } from './ClassroomWithCourse';
import {
    ClassroomWithCourseFromJSON,
    ClassroomWithCourseFromJSONTyped,
    ClassroomWithCourseToJSON,
} from './ClassroomWithCourse';

/**
 * 
 * @export
 * @interface GetClassrooms200Response
 */
export interface GetClassrooms200Response {
    /**
     * 
     * @type {Array<ClassroomWithCourse>}
     * @memberof GetClassrooms200Response
     */
    data?: Array<ClassroomWithCourse>;
}

/**
 * Check if a given object implements the GetClassrooms200Response interface.
 */
export function instanceOfGetClassrooms200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetClassrooms200ResponseFromJSON(json: any): GetClassrooms200Response {
    return GetClassrooms200ResponseFromJSONTyped(json, false);
}

export function GetClassrooms200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetClassrooms200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ClassroomWithCourseFromJSON)),
    };
}

export function GetClassrooms200ResponseToJSON(value?: GetClassrooms200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ClassroomWithCourseToJSON)),
    };
}
