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
 * @interface GetCourseLogsRequestAttendancesInner
 */
export interface GetCourseLogsRequestAttendancesInner {
    /**
     * 
     * @type {number}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    studentId: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    attend: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    knowledge?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    expression?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    attitude?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCourseLogsRequestAttendancesInner
     */
    comment?: string;
}

/**
 * Check if a given object implements the GetCourseLogsRequestAttendancesInner interface.
 */
export function instanceOfGetCourseLogsRequestAttendancesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "studentId" in value;
    isInstance = isInstance && "attend" in value;

    return isInstance;
}

export function GetCourseLogsRequestAttendancesInnerFromJSON(json: any): GetCourseLogsRequestAttendancesInner {
    return GetCourseLogsRequestAttendancesInnerFromJSONTyped(json, false);
}

export function GetCourseLogsRequestAttendancesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCourseLogsRequestAttendancesInner {
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

export function GetCourseLogsRequestAttendancesInnerToJSON(value?: GetCourseLogsRequestAttendancesInner | null): any {
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

