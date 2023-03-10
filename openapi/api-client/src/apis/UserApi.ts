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
  ErrorResponse,
  GetCurrentUser200Response,
  GetUsers200Response,
} from '../models';
import {
    DeleteUser200ResponseFromJSON,
    DeleteUser200ResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GetCurrentUser200ResponseFromJSON,
    GetCurrentUser200ResponseToJSON,
    GetUsers200ResponseFromJSON,
    GetUsers200ResponseToJSON,
} from '../models';

export interface DeleteUserRequest {
    xTenantUID: string;
    id: number;
}

export interface FindUserRequest {
    xTenantUID: string;
    id: number;
}

export interface GetCurrentUserRequest {
    xTenantUID: string;
}

export interface GetUsersRequest {
    xTenantUID: string;
}

/**
 * UserApi - interface
 * 
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * 
     * @summary ユーザ削除
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>>;

    /**
     * ユーザ削除
     */
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response>;

    /**
     * 
     * @summary ユーザ単一取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    findUserRaw(requestParameters: FindUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>>;

    /**
     * ユーザ単一取得
     */
    findUser(requestParameters: FindUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response>;

    /**
     * 
     * @summary 自身のユーザ情報を取得
     * @param {string} xTenantUID テナント識別子
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getCurrentUserRaw(requestParameters: GetCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>>;

    /**
     * 
     * 自身のユーザ情報を取得
     */
    getCurrentUser(requestParameters: GetCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response>;

    /**
     * 
     * @summary ユーザ一覧取得
     * @param {string} xTenantUID テナント識別子
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200Response>>;

    /**
     * ユーザ一覧取得
     */
    getUsers(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200Response>;

}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {

    /**
     * ユーザ削除
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling deleteUser.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUser.');
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
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUser200ResponseFromJSON(jsonValue));
    }

    /**
     * ユーザ削除
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザ単一取得
     */
    async findUserRaw(requestParameters: FindUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling findUser.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findUser.');
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
            path: `/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUser200ResponseFromJSON(jsonValue));
    }

    /**
     * ユーザ単一取得
     */
    async findUser(requestParameters: FindUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response> {
        const response = await this.findUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * 自身のユーザ情報を取得
     */
    async getCurrentUserRaw(requestParameters: GetCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCurrentUser200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling getCurrentUser.');
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
            path: `/users/current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCurrentUser200ResponseFromJSON(jsonValue));
    }

    /**
     * 
     * 自身のユーザ情報を取得
     */
    async getCurrentUser(requestParameters: GetCurrentUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCurrentUser200Response> {
        const response = await this.getCurrentUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ユーザ一覧取得
     */
    async getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling getUsers.');
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
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsers200ResponseFromJSON(jsonValue));
    }

    /**
     * ユーザ一覧取得
     */
    async getUsers(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200Response> {
        const response = await this.getUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
