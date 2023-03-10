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
  GetScores200Response,
} from '../models';
import {
    GetScores200ResponseFromJSON,
    GetScores200ResponseToJSON,
} from '../models';

export interface GetScoresRequest {
    xTenantUID: string;
    id: number;
}

/**
 * ScoreApi - interface
 * 
 * @export
 * @interface ScoreApiInterface
 */
export interface ScoreApiInterface {
    /**
     * 
     * @summary 授業の成績一覧を取得
     * @param {string} xTenantUID テナント識別子
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScoreApiInterface
     */
    getScoresRaw(requestParameters: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetScores200Response>>;

    /**
     * 授業の成績一覧を取得
     */
    getScores(requestParameters: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetScores200Response>;

}

/**
 * 
 */
export class ScoreApi extends runtime.BaseAPI implements ScoreApiInterface {

    /**
     * 授業の成績一覧を取得
     */
    async getScoresRaw(requestParameters: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetScores200Response>> {
        if (requestParameters.xTenantUID === null || requestParameters.xTenantUID === undefined) {
            throw new runtime.RequiredError('xTenantUID','Required parameter requestParameters.xTenantUID was null or undefined when calling getScores.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getScores.');
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
            path: `/courses/{id}/scores`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetScores200ResponseFromJSON(jsonValue));
    }

    /**
     * 授業の成績一覧を取得
     */
    async getScores(requestParameters: GetScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetScores200Response> {
        const response = await this.getScoresRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
