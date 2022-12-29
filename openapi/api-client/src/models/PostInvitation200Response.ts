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
import type { UserInvitation } from './UserInvitation';
import {
    UserInvitationFromJSON,
    UserInvitationFromJSONTyped,
    UserInvitationToJSON,
} from './UserInvitation';

/**
 * 
 * @export
 * @interface PostInvitation200Response
 */
export interface PostInvitation200Response {
    /**
     * 
     * @type {UserInvitation}
     * @memberof PostInvitation200Response
     */
    data?: UserInvitation;
}

/**
 * Check if a given object implements the PostInvitation200Response interface.
 */
export function instanceOfPostInvitation200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostInvitation200ResponseFromJSON(json: any): PostInvitation200Response {
    return PostInvitation200ResponseFromJSONTyped(json, false);
}

export function PostInvitation200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostInvitation200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UserInvitationFromJSON(json['data']),
    };
}

export function PostInvitation200ResponseToJSON(value?: PostInvitation200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UserInvitationToJSON(value.data),
    };
}
