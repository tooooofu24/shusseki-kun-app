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
import type { Attendance } from './Attendance';
import {
    AttendanceFromJSON,
    AttendanceFromJSONTyped,
    AttendanceToJSON,
} from './Attendance';

/**
 * 
 * @export
 * @interface AttendancesGet200Response
 */
export interface AttendancesGet200Response {
    /**
     * 
     * @type {Array<Attendance>}
     * @memberof AttendancesGet200Response
     */
    data?: Array<Attendance>;
}

/**
 * Check if a given object implements the AttendancesGet200Response interface.
 */
export function instanceOfAttendancesGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttendancesGet200ResponseFromJSON(json: any): AttendancesGet200Response {
    return AttendancesGet200ResponseFromJSONTyped(json, false);
}

export function AttendancesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttendancesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AttendanceFromJSON)),
    };
}

export function AttendancesGet200ResponseToJSON(value?: AttendancesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AttendanceToJSON)),
    };
}

