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
  CourseLogsGet200Response,
  DeleteUser200Response,
  FindCourseLog200Response,
  GetCourseLogsRequest,
  PostCourse200Response,
  UpdateCourseLogRequest,
} from '../models';
import {
    CourseLogsGet200ResponseFromJSON,
    CourseLogsGet200ResponseToJSON,
    DeleteUser200ResponseFromJSON,
    DeleteUser200ResponseToJSON,
    FindCourseLog200ResponseFromJSON,
    FindCourseLog200ResponseToJSON,
    GetCourseLogsRequestFromJSON,
    GetCourseLogsRequestToJSON,
    PostCourse200ResponseFromJSON,
    PostCourse200ResponseToJSON,
    UpdateCourseLogRequestFromJSON,
    UpdateCourseLogRequestToJSON,
} from '../models';

export interface CourseLogsGetRequest {
    xTenantUID: string;
    courseId?: number;
    period?: number;
    minDate?: Date;
    maxDate?: Date;
}

export interface DeleteCourseLogRequest {
    xTenantUID: string;
    id: number;
}

export interface FindCourseLogRequest {
    xTenantUID: string;
    id: number;
}

export interface GetCourseLogsOperationRequest {
    xTenantUID: string;
    getCourseLogsRequest: GetCourseLogsRequest;
}

export interface UpdateCourseLogOperationRequest {
    xTenantUID: string;
    id: number;
    updateCourseLogRequest?: UpdateCourseLogRequest;
}

/**
 * CourseLogApi - interface
 * 
 * @export
 * @interface CourseLogApiInterface
 */
export interface CourseLogApiInterface {
    /**
     * 
     * @summary 授業記録一覧取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} [courseId] 
     * @param {number} [period] 
     * @param {Date} [minDate] 
     * @param {Date} [maxDate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseLogApiInterface
     */
    courseLogsGetRaw(requestParameters: CourseLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CourseLogsGet200Response>>;

    /**
     * 授業記録一覧取得
     */
    courseLogsGet(requestParameters: CourseLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CourseLogsGet200Response>;

    /**
     * 
     * @summary 授業記録削除
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseLogApiInterface
     */
    deleteCourseLogRaw(requestParameters: DeleteCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>>;

    /**
     * 授業記録削除
     */
    deleteCourseLog(requestParameters: DeleteCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response>;

    /**
     * 
     * @summary 授業記録単一取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseLogApiInterface
     */
    findCourseLogRaw(requestParameters: FindCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindCourseLog200Response>>;

    /**
     * 授業記録単一取得
     */
    findCourseLog(requestParameters: FindCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindCourseLog200Response>;

    /**
     * 
     * @summary 授業記録登録
     * @param {string} xTenantUID テナント識別子
     * @param {GetCourseLogsRequest} getCourseLogsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseLogApiInterface
     */
    getCourseLogsRaw(requestParameters: GetCourseLogsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCourse200Response>>;

    /**
     * 授業記録登録
     */
    getCourseLogs(requestParameters: GetCourseLogsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCourse200Response>;

    /**
     * 
     * @summary 授業記録更新
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {UpdateCourseLogRequest} [updateCourseLogRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CourseLogApiInterface
     */
    updateCourseLogRaw(requestParameters: UpdateCourseLogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindCourseLog200Response>>;

    /**
     * 授業記録更新
     */
    updateCourseLog(requestParameters: UpdateCourseLogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindCourseLog200Response>;

}

/**
 * 
 */
export class CourseLogApi extends runtime.BaseAPI implements CourseLogApiInterface {

    /**
     * 授業記録一覧取得
     */
    async courseLogsGetRaw(requestParameters: CourseLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CourseLogsGet200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling courseLogsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.courseId !== undefined) {
            queryParameters['course-id'] = requestParameters.courseId;
        }

        if (requestParameters.period !== undefined) {
            queryParameters['period'] = requestParameters.period;
        }

        if (requestParameters.minDate !== undefined) {
            queryParameters['min-date'] = (requestParameters.minDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.maxDate !== undefined) {
            queryParameters['max-date'] = (requestParameters.maxDate as any).toISOString().substr(0,10);
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
            path: `/course-logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CourseLogsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業記録一覧取得
     */
    async courseLogsGet(requestParameters: CourseLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CourseLogsGet200Response> {
        const response = await this.courseLogsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 授業記録削除
     */
    async deleteCourseLogRaw(requestParameters: DeleteCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUser200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling deleteCourseLog.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCourseLog.');
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
            path: `/course-logs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUser200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業記録削除
     */
    async deleteCourseLog(requestParameters: DeleteCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUser200Response> {
        const response = await this.deleteCourseLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 授業記録単一取得
     */
    async findCourseLogRaw(requestParameters: FindCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindCourseLog200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling findCourseLog.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findCourseLog.');
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
            path: `/course-logs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FindCourseLog200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業記録単一取得
     */
    async findCourseLog(requestParameters: FindCourseLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindCourseLog200Response> {
        const response = await this.findCourseLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 授業記録登録
     */
    async getCourseLogsRaw(requestParameters: GetCourseLogsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCourse200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling getCourseLogs.');
        }

        if (requestParameters.getCourseLogsRequest === null || requestParameters.getCourseLogsRequest === undefined) {
            throw new runtime.RequiredError('getCourseLogsRequest','Required parameter requestParameters.getCourseLogsRequest was null or undefined when calling getCourseLogs.');
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
            path: `/course-logs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetCourseLogsRequestToJSON(requestParameters.getCourseLogsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostCourse200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業記録登録
     */
    async getCourseLogs(requestParameters: GetCourseLogsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCourse200Response> {
        const response = await this.getCourseLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 授業記録更新
     */
    async updateCourseLogRaw(requestParameters: UpdateCourseLogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FindCourseLog200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling updateCourseLog.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCourseLog.');
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
            path: `/course-logs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCourseLogRequestToJSON(requestParameters.updateCourseLogRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FindCourseLog200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業記録更新
     */
    async updateCourseLog(requestParameters: UpdateCourseLogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FindCourseLog200Response> {
        const response = await this.updateCourseLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
