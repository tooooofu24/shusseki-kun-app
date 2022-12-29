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
 * @interface DeleteUser200Response
 */
export interface DeleteUser200Response {
    /**
     * 削除されたID
     * @type {number}
     * @memberof DeleteUser200Response
     */
    data?: number;
}

/**
 * Check if a given object implements the DeleteUser200Response interface.
 */
export function instanceOfDeleteUser200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteUser200ResponseFromJSON(json: any): DeleteUser200Response {
    return DeleteUser200ResponseFromJSONTyped(json, false);
}

export function DeleteUser200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteUser200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function DeleteUser200ResponseToJSON(value?: DeleteUser200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
    };
}

