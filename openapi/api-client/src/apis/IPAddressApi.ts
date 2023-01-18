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


import * as runtime from '../runtime';
import type {
  DeleteUser200Response,
  GetIpAddresses200Response,
  PostIpAddress200Response,
  PostIpAddressRequest,
} from '../models';
import {
    DeleteUser200ResponseFromJSON,
    DeleteUser200ResponseToJSON,
    GetIpAddresses200ResponseFromJSON,
    GetIpAddresses200ResponseToJSON,
    PostIpAddress200ResponseFromJSON,
    PostIpAddress200ResponseToJSON,
    PostIpAddressRequestFromJSON,
    PostIpAddressRequestToJSON,
} from '../models';

export interface DeleteIpAddressRequest {
    xTenantUID: string;
    id: number;
}

export interface GetIpAddressesRequest {
    xTenantUID: string;
}

export interface PostIpAddressOperationRequest {
    xTenantUID: string;
    postIpAddressRequest: PostIpAddressRequest;
}

/**
 * IPAddressApi - interface
 * 
 * @export
 * @interface IPAddressApiInterface
 */
export interface IPAddressApiInterface {
    /**
     * 
     * @summary 許容IP削除
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressApiInterface
     */
    deleteIpAddressRaw(requestParameters: DeleteIpAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>>;

    /**
     * 許容IP削除
     */
    deleteIpAddress(requestParameters: DeleteIpAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response>;

    /**
     * 
     * @summary 許容IP一覧取得
     * @param {string} xTenantUID テナント識別子
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressApiInterface
     */
    getIpAddressesRaw(requestParameters: GetIpAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetIpAddresses200Response>>;

    /**
     * 許容IP一覧取得
     */
    getIpAddresses(requestParameters: GetIpAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetIpAddresses200Response>;

    /**
     * 
     * @summary 許容IP登録
     * @param {string} xTenantUID テナント識別子
     * @param {PostIpAddressRequest} postIpAddressRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressApiInterface
     */
    postIpAddressRaw(requestParameters: PostIpAddressOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostIpAddress200Response>>;

    /**
     * 許容IP登録
     */
    postIpAddress(requestParameters: PostIpAddressOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostIpAddress200Response>;

}

/**
 * 
 */
export class IPAddressApi extends runtime.BaseAPI implements IPAddressApiInterface {

    /**
     * 許容IP削除
     */
    async deleteIpAddressRaw(requestParameters: DeleteIpAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling deleteIpAddress.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteIpAddress.');
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUser200ResponseFromJSON(jsonValue));
    }

    /**
     * 許容IP削除
     */
    async deleteIpAddress(requestParameters: DeleteIpAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response> {
        const response = await this.deleteIpAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 許容IP一覧取得
     */
    async getIpAddressesRaw(requestParameters: GetIpAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetIpAddresses200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling getIpAddresses.');
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

        return new runtime.JSONApiResponse(response, (jsonValue) => GetIpAddresses200ResponseFromJSON(jsonValue));
    }

    /**
     * 許容IP一覧取得
     */
    async getIpAddresses(requestParameters: GetIpAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetIpAddresses200Response> {
        const response = await this.getIpAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 許容IP登録
     */
    async postIpAddressRaw(requestParameters: PostIpAddressOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostIpAddress200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling postIpAddress.');
        }

        if (requestParameters.postIpAddressRequest === null || requestParameters.postIpAddressRequest === undefined) {
            throw new runtime.RequiredError('postIpAddressRequest','Required parameter requestParameters.postIpAddressRequest was null or undefined when calling postIpAddress.');
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
            body: PostIpAddressRequestToJSON(requestParameters.postIpAddressRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostIpAddress200ResponseFromJSON(jsonValue));
    }

    /**
     * 許容IP登録
     */
    async postIpAddress(requestParameters: PostIpAddressOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostIpAddress200Response> {
        const response = await this.postIpAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
