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
 * @interface UpdateAttendanceRequest
 */
export interface UpdateAttendanceRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAttendanceRequest
     */
    attend?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UpdateAttendanceRequest
     */
    knowledge?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAttendanceRequest
     */
    expression?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAttendanceRequest
     */
    attitude?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateAttendanceRequest
     */
    comment?: string;
}

/**
 * Check if a given object implements the UpdateAttendanceRequest interface.
 */
export function instanceOfUpdateAttendanceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateAttendanceRequestFromJSON(json: any): UpdateAttendanceRequest {
    return UpdateAttendanceRequestFromJSONTyped(json, false);
}

export function UpdateAttendanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAttendanceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attend': !exists(json, 'attend') ? undefined : json['attend'],
        'knowledge': !exists(json, 'knowledge') ? undefined : json['knowledge'],
        'expression': !exists(json, 'expression') ? undefined : json['expression'],
        'attitude': !exists(json, 'attitude') ? undefined : json['attitude'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function UpdateAttendanceRequestToJSON(value?: UpdateAttendanceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attend': value.attend,
        'knowledge': value.knowledge,
        'expression': value.expression,
        'attitude': value.attitude,
        'comment': value.comment,
    };
}

