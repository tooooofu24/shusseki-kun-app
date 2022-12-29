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
import type { Invitation } from './Invitation';
import {
    InvitationFromJSON,
    InvitationFromJSONTyped,
    InvitationToJSON,
} from './Invitation';

/**
 * 
 * @export
 * @interface GetInvitations200Response
 */
export interface GetInvitations200Response {
    /**
     * 
     * @type {Array<Invitation>}
     * @memberof GetInvitations200Response
     */
    data?: Array<Invitation>;
}

/**
 * Check if a given object implements the GetInvitations200Response interface.
 */
export function instanceOfGetInvitations200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetInvitations200ResponseFromJSON(json: any): GetInvitations200Response {
    return GetInvitations200ResponseFromJSONTyped(json, false);
}

export function GetInvitations200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInvitations200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(InvitationFromJSON)),
    };
}

export function GetInvitations200ResponseToJSON(value?: GetInvitations200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(InvitationToJSON)),
    };
}

