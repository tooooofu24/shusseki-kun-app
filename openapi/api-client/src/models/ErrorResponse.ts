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
 * エラーレスポンス
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    error: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    displayMessage: string;
    /**
     * 
     * @type {object}
     * @memberof ErrorResponse
     */
    detail: object;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "displayMessage" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': json['error'],
        'code': json['code'],
        'message': json['message'],
        'displayMessage': json['displayMessage'],
        'detail': json['detail'],
    };
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'code': value.code,
        'message': value.message,
        'displayMessage': value.displayMessage,
        'detail': value.detail,
    };
}

