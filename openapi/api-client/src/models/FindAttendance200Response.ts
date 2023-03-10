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
import type { Attendance } from './Attendance';
import {
    AttendanceFromJSON,
    AttendanceFromJSONTyped,
    AttendanceToJSON,
} from './Attendance';

/**
 * 
 * @export
 * @interface FindAttendance200Response
 */
export interface FindAttendance200Response {
    /**
     * 
     * @type {Attendance}
     * @memberof FindAttendance200Response
     */
    data: Attendance;
}

/**
 * Check if a given object implements the FindAttendance200Response interface.
 */
export function instanceOfFindAttendance200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function FindAttendance200ResponseFromJSON(json: any): FindAttendance200Response {
    return FindAttendance200ResponseFromJSONTyped(json, false);
}

export function FindAttendance200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindAttendance200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AttendanceFromJSON(json['data']),
    };
}

export function FindAttendance200ResponseToJSON(value?: FindAttendance200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AttendanceToJSON(value.data),
    };
}

