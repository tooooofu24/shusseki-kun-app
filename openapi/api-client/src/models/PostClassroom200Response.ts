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
import type { Classroom } from './Classroom';
import {
    ClassroomFromJSON,
    ClassroomFromJSONTyped,
    ClassroomToJSON,
} from './Classroom';

/**
 * 
 * @export
 * @interface PostClassroom200Response
 */
export interface PostClassroom200Response {
    /**
     * 
     * @type {Classroom}
     * @memberof PostClassroom200Response
     */
    data?: Classroom;
}

/**
 * Check if a given object implements the PostClassroom200Response interface.
 */
export function instanceOfPostClassroom200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostClassroom200ResponseFromJSON(json: any): PostClassroom200Response {
    return PostClassroom200ResponseFromJSONTyped(json, false);
}

export function PostClassroom200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostClassroom200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ClassroomFromJSON(json['data']),
    };
}

export function PostClassroom200ResponseToJSON(value?: PostClassroom200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ClassroomToJSON(value.data),
    };
}

