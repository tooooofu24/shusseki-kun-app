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
  StudentsGet200Response,
  StudentsIdDelete200Response,
  UsersIdDelete200Response,
} from '../models';
import {
    StudentsGet200ResponseFromJSON,
    StudentsGet200ResponseToJSON,
    StudentsIdDelete200ResponseFromJSON,
    StudentsIdDelete200ResponseToJSON,
    UsersIdDelete200ResponseFromJSON,
    UsersIdDelete200ResponseToJSON,
} from '../models';

export interface StudentsGetRequest {
    xTenantUID: string;
    classroomId?: number;
    courseId?: number;
    number?: number;
}

export interface StudentsIdDeleteRequest {
    xTenantUID: string;
    id: number;
}

export interface StudentsIdGetRequest {
    xTenantUID: string;
    id: number;
}

/**
 * StudentApi - interface
 * 
 * @export
 * @interface StudentApiInterface
 */
export interface StudentApiInterface {
    /**
     * 
     * @summary 生徒一覧取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} [classroomId] 
     * @param {number} [courseId] 
     * @param {number} [number] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentApiInterface
     */
    studentsGetRaw(requestParameters: StudentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudentsGet200Response>>;

    /**
     * 生徒一覧取得
     */
    studentsGet(requestParameters: StudentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudentsGet200Response>;

    /**
     * 
     * @summary 生徒削除
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentApiInterface
     */
    studentsIdDeleteRaw(requestParameters: StudentsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>>;

    /**
     * 生徒削除
     */
    studentsIdDelete(requestParameters: StudentsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response>;

    /**
     * 
     * @summary 生徒単一取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentApiInterface
     */
    studentsIdGetRaw(requestParameters: StudentsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudentsIdDelete200Response>>;

    /**
     * 生徒単一取得
     */
    studentsIdGet(requestParameters: StudentsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudentsIdDelete200Response>;

}

/**
 * 
 */
export class StudentApi extends runtime.BaseAPI implements StudentApiInterface {

    /**
     * 生徒一覧取得
     */
    async studentsGetRaw(requestParameters: StudentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudentsGet200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling studentsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.classroomId !== undefined) {
            queryParameters['classroom-id'] = requestParameters.classroomId;
        }

        if (requestParameters.courseId !== undefined) {
            queryParameters['course-id'] = requestParameters.courseId;
        }

        if (requestParameters.number !== undefined) {
            queryParameters['number'] = requestParameters.number;
        }

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
            path: `/students`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * 生徒一覧取得
     */
    async studentsGet(requestParameters: StudentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudentsGet200Response> {
        const response = await this.studentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 生徒削除
     */
    async studentsIdDeleteRaw(requestParameters: StudentsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling studentsIdDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling studentsIdDelete.');
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
            path: `/students/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * 生徒削除
     */
    async studentsIdDelete(requestParameters: StudentsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersIdDelete200Response> {
        const response = await this.studentsIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 生徒単一取得
     */
    async studentsIdGetRaw(requestParameters: StudentsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudentsIdDelete200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling studentsIdGet.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling studentsIdGet.');
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
            path: `/students/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentsIdDelete200ResponseFromJSON(jsonValue));
    }

    /**
     * 生徒単一取得
     */
    async studentsIdGet(requestParameters: StudentsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudentsIdDelete200Response> {
        const response = await this.studentsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
