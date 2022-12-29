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
 * @interface PostCourseLogsRequestAttendancesInner
 */
export interface PostCourseLogsRequestAttendancesInner {
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    studentId: number;
    /**
     * 
     * @type {boolean}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    attend: boolean;
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    knowledge?: number;
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    expression?: number;
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    attitude?: number;
    /**
     * 
     * @type {string}
     * @memberof PostCourseLogsRequestAttendancesInner
     */
    comment?: string;
}

/**
 * Check if a given object implements the PostCourseLogsRequestAttendancesInner interface.
 */
export function instanceOfPostCourseLogsRequestAttendancesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "studentId" in value;
    isInstance = isInstance && "attend" in value;

    return isInstance;
}

export function PostCourseLogsRequestAttendancesInnerFromJSON(json: any): PostCourseLogsRequestAttendancesInner {
    return PostCourseLogsRequestAttendancesInnerFromJSONTyped(json, false);
}

export function PostCourseLogsRequestAttendancesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCourseLogsRequestAttendancesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'studentId': json['studentId'],
        'attend': json['attend'],
        'knowledge': !exists(json, 'knowledge') ? undefined : json['knowledge'],
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'attitude': !exists(json, 'attitude') ? undefined : json['attitude'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function PostCourseLogsRequestAttendancesInnerToJSON(value?: PostCourseLogsRequestAttendancesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'studentId': value.studentId,
        'attend': value.attend,
        'knowledge': value.knowledge,
        'expression': value.expression,
        'attitude': value.attitude,
        'comment': value.comment,
    };
}

