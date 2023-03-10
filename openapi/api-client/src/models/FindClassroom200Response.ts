/* tslint:disable */
/* eslint-disable */
/**
 * 出席くんAPI
 * 出席くんAPI
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: tkc@gmail.com
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
 * @interface FindClassroom200Response
 */
export interface FindClassroom200Response {
    /**
     * 
     * @type {ClassroomWithCourse}
     * @memberof FindClassroom200Response
     */
    data: ClassroomWithCourse;
}

/**
 * Check if a given object implements the FindClassroom200Response interface.
 */
export function instanceOfFindClassroom200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function FindClassroom200ResponseFromJSON(json: any): FindClassroom200Response {
    return FindClassroom200ResponseFromJSONTyped(json, false);
}

export function FindClassroom200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindClassroom200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ClassroomWithCourseFromJSON(json['data']),
    };
}

export function FindClassroom200ResponseToJSON(value?: FindClassroom200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ClassroomWithCourseToJSON(value.data),
    };
}

