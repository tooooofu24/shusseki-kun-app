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
 * @interface InvitationsGet200Response
 */
export interface InvitationsGet200Response {
    /**
     * 
     * @type {Array<UserInvitation>}
     * @memberof InvitationsGet200Response
     */
    data?: Array<UserInvitation>;
}

/**
 * Check if a given object implements the InvitationsGet200Response interface.
 */
export function instanceOfInvitationsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvitationsGet200ResponseFromJSON(json: any): InvitationsGet200Response {
    return InvitationsGet200ResponseFromJSONTyped(json, false);
}

export function InvitationsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserInvitationFromJSON)),
    };
}

export function InvitationsGet200ResponseToJSON(value?: InvitationsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserInvitationToJSON)),
    };
}

