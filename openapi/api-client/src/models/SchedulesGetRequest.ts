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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface SchedulesGetRequest
 */
export interface SchedulesGetRequest {
  /**
   *
   * @type {number}
   * @memberof SchedulesGetRequest
   */
  classroomId?: number;
  /**
   *
   * @type {number}
   * @memberof SchedulesGetRequest
   */
  subjectId?: number;
  /**
   * 1-7 or mon-sun or 月-日
   * @type {string}
   * @memberof SchedulesGetRequest
   */
  day?: string;
  /**
   *
   * @type {number}
   * @memberof SchedulesGetRequest
   */
  period?: number;
}

/**
 * Check if a given object implements the SchedulesGetRequest interface.
 */
export function instanceOfSchedulesGetRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SchedulesGetRequestFromJSON(json: any): SchedulesGetRequest {
  return SchedulesGetRequestFromJSONTyped(json, false);
}

export function SchedulesGetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SchedulesGetRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    classroomId: !exists(json, "classroomId") ? undefined : json["classroomId"],
    subjectId: !exists(json, "subjectId") ? undefined : json["subjectId"],
    day: !exists(json, "day") ? undefined : json["day"],
    period: !exists(json, "period") ? undefined : json["period"],
  };
}

export function SchedulesGetRequestToJSON(
  value?: SchedulesGetRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    classroomId: value.classroomId,
    subjectId: value.subjectId,
    day: value.day,
    period: value.period,
  };
}
