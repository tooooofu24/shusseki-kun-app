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
import type { PostCourseLogsRequestAttendancesInner } from './PostCourseLogsRequestAttendancesInner';
import {
    PostCourseLogsRequestAttendancesInnerFromJSON,
    PostCourseLogsRequestAttendancesInnerFromJSONTyped,
    PostCourseLogsRequestAttendancesInnerToJSON,
} from './PostCourseLogsRequestAttendancesInner';

/**
 * 
 * @export
 * @interface PostCourseLogsRequest
 */
export interface PostCourseLogsRequest {
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequest
     */
    courseId: number;
    /**
     * 
     * @type {string}
     * @memberof PostCourseLogsRequest
     */
    date: string;
    /**
     * 
     * @type {number}
     * @memberof PostCourseLogsRequest
     */
    period: number;
    /**
     * 
     * @type {Array<PostCourseLogsRequestAttendancesInner>}
     * @memberof PostCourseLogsRequest
     */
    attendances: Array<PostCourseLogsRequestAttendancesInner>;
}

/**
 * Check if a given object implements the PostCourseLogsRequest interface.
 */
export function instanceOfPostCourseLogsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "courseId" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "period" in value;
    isInstance = isInstance && "attendances" in value;

    return isInstance;
}

export function PostCourseLogsRequestFromJSON(json: any): PostCourseLogsRequest {
    return PostCourseLogsRequestFromJSONTyped(json, false);
}

export function PostCourseLogsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCourseLogsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'courseId': json['courseId'],
        'date': json['date'],
        'period': json['period'],
        'attendances': ((json['attendances'] as Array<any>).map(PostCourseLogsRequestAttendancesInnerFromJSON)),
    };
}

export function PostCourseLogsRequestToJSON(value?: PostCourseLogsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'courseId': value.courseId,
        'date': value.date,
        'period': value.period,
        'attendances': ((value.attendances as Array<any>).map(PostCourseLogsRequestAttendancesInnerToJSON)),
    };
}

