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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface ClientIp
 */
export interface ClientIp {
    /**
     * 
     * @type {number}
     * @memberof ClientIp
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ClientIp
     */
    ip: string;
    /**
     * 
     * @type {string}
     * @memberof ClientIp
     */
    label?: string;
    /**
     * 
     * @type {User}
     * @memberof ClientIp
     */
    createdBy?: User;
    /**
     * 
     * @type {User}
     * @memberof ClientIp
     */
    updatedBy?: User;
    /**
     * 
     * @type {Date}
     * @memberof ClientIp
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ClientIp
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the ClientIp interface.
 */
export function instanceOfClientIp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ip" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ClientIpFromJSON(json: any): ClientIp {
    return ClientIpFromJSONTyped(json, false);
}

export function ClientIpFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientIp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ip': json['ip'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'createdBy': !exists(json, 'createdBy') ? undefined : UserFromJSON(json['createdBy']),
        'updatedBy': !exists(json, 'updatedBy') ? undefined : UserFromJSON(json['updatedBy']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function ClientIpToJSON(value?: ClientIp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ip': value.ip,
        'label': value.label,
        'createdBy': UserToJSON(value.createdBy),
        'updatedBy': UserToJSON(value.updatedBy),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

