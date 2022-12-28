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
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * 
 * @export
 * @interface CoursesIdScoresGet200Response
 */
export interface CoursesIdScoresGet200Response {
    /**
     * 
     * @type {Array<Score>}
     * @memberof CoursesIdScoresGet200Response
     */
    data?: Array<Score>;
}

/**
 * Check if a given object implements the CoursesIdScoresGet200Response interface.
 */
export function instanceOfCoursesIdScoresGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoursesIdScoresGet200ResponseFromJSON(json: any): CoursesIdScoresGet200Response {
    return CoursesIdScoresGet200ResponseFromJSONTyped(json, false);
}

export function CoursesIdScoresGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoursesIdScoresGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ScoreFromJSON)),
    };
}

export function CoursesIdScoresGet200ResponseToJSON(value?: CoursesIdScoresGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ScoreToJSON)),
    };
}

