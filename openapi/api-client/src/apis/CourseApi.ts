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

import * as runtime from "../runtime";
import type {
  CoursesGet200Response,
  CoursesGet200Response1,
  CoursesGetRequest,
  CoursesIdScoresGet200Response,
  UsersIdDelete200Response,
} from "../models";
import {
  CoursesGet200ResponseFromJSON,
  CoursesGet200ResponseToJSON,
  CoursesGet200Response1FromJSON,
  CoursesGet200Response1ToJSON,
  CoursesGetRequestFromJSON,
  CoursesGetRequestToJSON,
  CoursesIdScoresGet200ResponseFromJSON,
  CoursesIdScoresGet200ResponseToJSON,
  UsersIdDelete200ResponseFromJSON,
  UsersIdDelete200ResponseToJSON,
} from "../models";

export interface CoursesGetRequest {
  xTenantUID: string;
  classroomId?: number;
  subjectId?: number;
}

export interface CoursesIdDeleteRequest {
  xTenantUID: string;
  id: number;
}

export interface CoursesIdGetRequest {
  xTenantUID: string;
  id: number;
}

export interface CoursesIdScoresGetRequest {
  xTenantUID: string;
  id: number;
}

export interface CoursesPostRequest {
  xTenantUID: string;
  coursesGetRequest: CoursesGetRequest;
}

/**
 * CourseApi - interface
 *
 * @export
 * @interface CourseApiInterface
 */
export interface CourseApiInterface {
  /**
   *
   * @summary 授業一覧取得
   * @param {string} xTenantUID テナント識別子
   * @param {number} [classroomId]
   * @param {number} [subjectId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CourseApiInterface
   */
  coursesGetRaw(
    requestParameters: CoursesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response>>;

  /**
   * 授業一覧取得
   */
  coursesGet(
    requestParameters: CoursesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response>;

  /**
   *
   * @summary 授業削除
   * @param {string} xTenantUID テナント識別子
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CourseApiInterface
   */
  coursesIdDeleteRaw(
    requestParameters: CoursesIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UsersIdDelete200Response>>;

  /**
   * 授業削除
   */
  coursesIdDelete(
    requestParameters: CoursesIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UsersIdDelete200Response>;

  /**
   *
   * @summary 授業単一取得
   * @param {string} xTenantUID テナント識別子
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CourseApiInterface
   */
  coursesIdGetRaw(
    requestParameters: CoursesIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response1>>;

  /**
   * 授業単一取得
   */
  coursesIdGet(
    requestParameters: CoursesIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response1>;

  /**
   *
   * @summary 授業の成績一覧を取得
   * @param {string} xTenantUID テナント識別子
   * @param {number} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CourseApiInterface
   */
  coursesIdScoresGetRaw(
    requestParameters: CoursesIdScoresGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesIdScoresGet200Response>>;

  /**
   * 授業の成績一覧を取得
   */
  coursesIdScoresGet(
    requestParameters: CoursesIdScoresGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesIdScoresGet200Response>;

  /**
   *
   * @summary 授業登録
   * @param {string} xTenantUID テナント識別子
   * @param {CoursesGetRequest} coursesGetRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CourseApiInterface
   */
  coursesPostRaw(
    requestParameters: CoursesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response1>>;

  /**
   * 授業登録
   */
  coursesPost(
    requestParameters: CoursesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response1>;
}

/**
 *
 */
export class CourseApi extends runtime.BaseAPI implements CourseApiInterface {
  /**
   * 授業一覧取得
   */
  async coursesGetRaw(
    requestParameters: CoursesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response>> {
    if (
      requestParameters.xTenantUID === null ||
      requestParameters.xTenantUID === undefined
    ) {
      throw new runtime.RequiredError(
        "xTenantUID",
        "Required parameter requestParameters.xTenantUID was null or undefined when calling coursesGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.classroomId !== undefined) {
      queryParameters["classroom-id"] = requestParameters.classroomId;
    }

    if (requestParameters.subjectId !== undefined) {
      queryParameters["subject-id"] = requestParameters.subjectId;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xTenantUID !== undefined &&
      requestParameters.xTenantUID !== null
    ) {
      headerParameters["X-Tenant-UID"] = String(requestParameters.xTenantUID);
    }

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("Bearer", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/courses`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CoursesGet200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * 授業一覧取得
   */
  async coursesGet(
    requestParameters: CoursesGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response> {
    const response = await this.coursesGetRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * 授業削除
   */
  async coursesIdDeleteRaw(
    requestParameters: CoursesIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<UsersIdDelete200Response>> {
    if (
      requestParameters.xTenantUID === null ||
      requestParameters.xTenantUID === undefined
    ) {
      throw new runtime.RequiredError(
        "xTenantUID",
        "Required parameter requestParameters.xTenantUID was null or undefined when calling coursesIdDelete."
      );
    }

    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling coursesIdDelete."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xTenantUID !== undefined &&
      requestParameters.xTenantUID !== null
    ) {
      headerParameters["X-Tenant-UID"] = String(requestParameters.xTenantUID);
    }

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("Bearer", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/courses/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UsersIdDelete200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * 授業削除
   */
  async coursesIdDelete(
    requestParameters: CoursesIdDeleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<UsersIdDelete200Response> {
    const response = await this.coursesIdDeleteRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * 授業単一取得
   */
  async coursesIdGetRaw(
    requestParameters: CoursesIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response1>> {
    if (
      requestParameters.xTenantUID === null ||
      requestParameters.xTenantUID === undefined
    ) {
      throw new runtime.RequiredError(
        "xTenantUID",
        "Required parameter requestParameters.xTenantUID was null or undefined when calling coursesIdGet."
      );
    }

    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling coursesIdGet."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xTenantUID !== undefined &&
      requestParameters.xTenantUID !== null
    ) {
      headerParameters["X-Tenant-UID"] = String(requestParameters.xTenantUID);
    }

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("Bearer", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/courses/{id}`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CoursesGet200Response1FromJSON(jsonValue)
    );
  }

  /**
   * 授業単一取得
   */
  async coursesIdGet(
    requestParameters: CoursesIdGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response1> {
    const response = await this.coursesIdGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * 授業の成績一覧を取得
   */
  async coursesIdScoresGetRaw(
    requestParameters: CoursesIdScoresGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesIdScoresGet200Response>> {
    if (
      requestParameters.xTenantUID === null ||
      requestParameters.xTenantUID === undefined
    ) {
      throw new runtime.RequiredError(
        "xTenantUID",
        "Required parameter requestParameters.xTenantUID was null or undefined when calling coursesIdScoresGet."
      );
    }

    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling coursesIdScoresGet."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.xTenantUID !== undefined &&
      requestParameters.xTenantUID !== null
    ) {
      headerParameters["X-Tenant-UID"] = String(requestParameters.xTenantUID);
    }

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("Bearer", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/courses/{id}/scores`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CoursesIdScoresGet200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * 授業の成績一覧を取得
   */
  async coursesIdScoresGet(
    requestParameters: CoursesIdScoresGetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesIdScoresGet200Response> {
    const response = await this.coursesIdScoresGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * 授業登録
   */
  async coursesPostRaw(
    requestParameters: CoursesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<CoursesGet200Response1>> {
    if (
      requestParameters.xTenantUID === null ||
      requestParameters.xTenantUID === undefined
    ) {
      throw new runtime.RequiredError(
        "xTenantUID",
        "Required parameter requestParameters.xTenantUID was null or undefined when calling coursesPost."
      );
    }

    if (
      requestParameters.coursesGetRequest === null ||
      requestParameters.coursesGetRequest === undefined
    ) {
      throw new runtime.RequiredError(
        "coursesGetRequest",
        "Required parameter requestParameters.coursesGetRequest was null or undefined when calling coursesPost."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (
      requestParameters.xTenantUID !== undefined &&
      requestParameters.xTenantUID !== null
    ) {
      headerParameters["X-Tenant-UID"] = String(requestParameters.xTenantUID);
    }

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken;
      const tokenString = await token("Bearer", []);

      if (tokenString) {
        headerParameters["Authorization"] = `Bearer ${tokenString}`;
      }
    }
    const response = await this.request(
      {
        path: `/courses`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CoursesGetRequestToJSON(requestParameters.coursesGetRequest),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CoursesGet200Response1FromJSON(jsonValue)
    );
  }

  /**
   * 授業登録
   */
  async coursesPost(
    requestParameters: CoursesPostRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<CoursesGet200Response1> {
    const response = await this.coursesPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
