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
/**
 * 
 * @export
 * @interface PostCourseRequest
 */
export interface PostCourseRequest {
    /**
     * 
     * @type {number}
     * @memberof PostCourseRequest
     */
    classroomId: number;
    /**
     * 
     * @type {number}
     * @memberof PostCourseRequest
     */
    subjectId: number;
}

/**
 * Check if a given object implements the PostCourseRequest interface.
 */
export function instanceOfPostCourseRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "classroomId" in value;
    isInstance = isInstance && "subjectId" in value;

    return isInstance;
}

export function PostCourseRequestFromJSON(json: any): PostCourseRequest {
    return PostCourseRequestFromJSONTyped(json, false);
}

export function PostCourseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCourseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classroomId': json['classroomId'],
        'subjectId': json['subjectId'],
    };
}

export function PostCourseRequestToJSON(value?: PostCourseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classroomId': value.classroomId,
        'subjectId': value.subjectId,
    };
}

