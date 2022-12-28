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
import type { CourseLog } from "./CourseLog";
import {
  CourseLogFromJSON,
  CourseLogFromJSONTyped,
  CourseLogToJSON,
} from "./CourseLog";

/**
 *
 * @export
 * @interface CourseLogsIdDelete200Response
 */
export interface CourseLogsIdDelete200Response {
  /**
   *
   * @type {CourseLog}
   * @memberof CourseLogsIdDelete200Response
   */
  data?: CourseLog;
}

/**
 * Check if a given object implements the CourseLogsIdDelete200Response interface.
 */
export function instanceOfCourseLogsIdDelete200Response(
  value: object
): boolean {
  let isInstance = true;

  return isInstance;
}

export function CourseLogsIdDelete200ResponseFromJSON(
  json: any
): CourseLogsIdDelete200Response {
  return CourseLogsIdDelete200ResponseFromJSONTyped(json, false);
}

export function CourseLogsIdDelete200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CourseLogsIdDelete200Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, "data") ? undefined : CourseLogFromJSON(json["data"]),
  };
}

export function CourseLogsIdDelete200ResponseToJSON(
  value?: CourseLogsIdDelete200Response | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: CourseLogToJSON(value.data),
  };
}
