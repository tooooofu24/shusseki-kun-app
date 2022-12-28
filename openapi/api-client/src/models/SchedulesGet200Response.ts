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
import type { Schedule } from './Schedule';
import {
    ScheduleFromJSON,
    ScheduleFromJSONTyped,
    ScheduleToJSON,
} from './Schedule';

/**
 * 
 * @export
 * @interface SchedulesGet200Response
 */
export interface SchedulesGet200Response {
    /**
     * 
     * @type {Array<Schedule>}
     * @memberof SchedulesGet200Response
     */
    data?: Array<Schedule>;
}

/**
 * Check if a given object implements the SchedulesGet200Response interface.
 */
export function instanceOfSchedulesGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SchedulesGet200ResponseFromJSON(json: any): SchedulesGet200Response {
    return SchedulesGet200ResponseFromJSONTyped(json, false);
}

export function SchedulesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchedulesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ScheduleFromJSON)),
    };
}

export function SchedulesGet200ResponseToJSON(value?: SchedulesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ScheduleToJSON)),
    };
}

