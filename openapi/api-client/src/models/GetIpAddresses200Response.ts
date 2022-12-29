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
import type { ClientIp } from './ClientIp';
import {
    ClientIpFromJSON,
    ClientIpFromJSONTyped,
    ClientIpToJSON,
} from './ClientIp';

/**
 * 
 * @export
 * @interface GetIpAddresses200Response
 */
export interface GetIpAddresses200Response {
    /**
     * 
     * @type {Array<ClientIp>}
     * @memberof GetIpAddresses200Response
     */
    data?: Array<ClientIp>;
}

/**
 * Check if a given object implements the GetIpAddresses200Response interface.
 */
export function instanceOfGetIpAddresses200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetIpAddresses200ResponseFromJSON(json: any): GetIpAddresses200Response {
    return GetIpAddresses200ResponseFromJSONTyped(json, false);
}

export function GetIpAddresses200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetIpAddresses200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ClientIpFromJSON)),
    };
}

export function GetIpAddresses200ResponseToJSON(value?: GetIpAddresses200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ClientIpToJSON)),
    };
}
