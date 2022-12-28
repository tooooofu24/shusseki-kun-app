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


import * as runtime from '../runtime';
import type {
  IpAddressesGet200Response,
  IpAddressesGet200Response1,
  IpAddressesGetRequest,
  UsersIdDelete200Response,
} from '../models';
import {
    IpAddressesGet200ResponseFromJSON,
    IpAddressesGet200ResponseToJSON,
    IpAddressesGet200Response1FromJSON,
    IpAddressesGet200Response1ToJSON,
    IpAddressesGetRequestFromJSON,
    IpAddressesGetRequestToJSON,
    UsersIdDelete200ResponseFromJSON,
    UsersIdDelete200ResponseToJSON,
} from '../models';

export interface IpAddressesGetRequest {
    xTenantUID: string;
}

export interface IpAddressesIdDeleteRequest {
    xTenantUID: string;
    id: number;
}

export interface IpAddressesPostRequest {
    xTenantUID: string;
    ipAddressesGetRequest: IpAddressesGetRequest;
}

/**
 * ClientIPApi - interface
 * 
 * @export
 * @interface ClientIPApiInterface
 */
export interface ClientIPApiInterface {
    /**
     * 
     * @summary 許容IP一覧取得
     * @param {string} xTenantUID テナント識別子
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientIPApiInterface
     */
    ipAddressesGetRaw(requestParameters: IpAddressesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IpAddressesGet200Response>>;

    /**
     * 許容IP一覧取得
     */
    ipAddressesGet(requestParameters: IpAddressesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IpAddressesGet200Response>;

    /**
     * 
     * @summary 許容IP削除
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientIPApiInterface
     */
    ipAddressesIdDeleteRaw(requestParameters: IpAddressesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>>;

    /**
     * 許容IP削除
     */
    ipAddressesIdDelete(requestParameters: IpAddressesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response>;

    /**
     * 
     * @summary 許容IP登録
     * @param {string} xTenantUID テナント識別子
     * @param {IpAddressesGetRequest} ipAddressesGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientIPApiInterface
     */
    ipAddressesPostRaw(requestParameters: IpAddressesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IpAddressesGet200Response1>>;

    /**
     * 許容IP登録
     */
    ipAddressesPost(requestParameters: IpAddressesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IpAddressesGet200Response1>;

}

/**
 * 
 */
export class ClientIPApi extends runtime.BaseAPI implements ClientIPApiInterface {

    /**
     * 許容IP一覧取得
     */
    async ipAddressesGetRaw(requestParameters: IpAddressesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IpAddressesGet200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling ipAddressesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTenantUID !== undefined && requestParameters.xTenantUID !== null) {
            headerParameters['X-Tenant-UID'] = String(requestParameters.xTenantUID);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/ip-addresses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IpAddressesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * 許容IP一覧取得
     */
    async ipAddressesGet(requestParameters: IpAddressesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IpAddressesGet200Response> {
        const response = await this.ipAddressesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 許容IP削除
     */
    async ipAddressesIdDeleteRaw(requestParameters: IpAddressesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling ipAddressesIdDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ipAddressesIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xTenantUID !== undefined && requestParameters.xTenantUID !== null) {
            headerParameters['X-Tenant-UID'] = String(requestParameters.xTenantUID);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/ip-addresses/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * 許容IP削除
     */
    async ipAddressesIdDelete(requestParameters: IpAddressesIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.ipAddressesIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 許容IP登録
     */
    async ipAddressesPostRaw(requestParameters: IpAddressesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IpAddressesGet200Response1>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling ipAddressesPost.');
        }

        if (requestParameters.ipAddressesGetRequest === null || requestParameters.ipAddressesGetRequest === undefined) {
            throw new runtime.RequiredError('ipAddressesGetRequest','Required parameter requestParameters.ipAddressesGetRequest was null or undefined when calling ipAddressesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xTenantUID !== undefined && requestParameters.xTenantUID !== null) {
            headerParameters['X-Tenant-UID'] = String(requestParameters.xTenantUID);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/ip-addresses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IpAddressesGetRequestToJSON(requestParameters.ipAddressesGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IpAddressesGet200Response1FromJSON(jsonValue));
    }

    /**
     * 許容IP登録
     */
    async ipAddressesPost(requestParameters: IpAddressesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IpAddressesGet200Response1> {
        const response = await this.ipAddressesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
