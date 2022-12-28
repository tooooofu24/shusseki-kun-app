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
import type { Course } from "./Course";
import { CourseFromJSON, CourseFromJSONTyped, CourseToJSON } from "./Course";

/**
 *
 * @export
 * @interface CourseLog
 */
export interface CourseLog {
  /**
   *
   * @type {number}
   * @memberof CourseLog
   */
  id: number;
  /**
   *
   * @type {Date}
   * @memberof CourseLog
   */
  date: Date;
  /**
   *
   * @type {number}
   * @memberof CourseLog
   */
  period: number;
  /**
   *
   * @type {Course}
   * @memberof CourseLog
   */
  course: Course;
  /**
   *
   * @type {Date}
   * @memberof CourseLog
   */
  createdAt: Date;
  /**
   *
   * @type {Date}
   * @memberof CourseLog
   */
  updatedAt?: Date;
}

/**
 * Check if a given object implements the CourseLog interface.
 */
export function instanceOfCourseLog(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && "id" in value;
  isInstance = isInstance && "date" in value;
  isInstance = isInstance && "period" in value;
  isInstance = isInstance && "course" in value;
  isInstance = isInstance && "createdAt" in value;

  return isInstance;
}

export function CourseLogFromJSON(json: any): CourseLog {
  return CourseLogFromJSONTyped(json, false);
}

export function CourseLogFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CourseLog {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: json["id"],
    date: new Date(json["date"]),
    period: json["period"],
    course: CourseFromJSON(json["course"]),
    createdAt: new Date(json["createdAt"]),
    updatedAt: !exists(json, "updatedAt")
      ? undefined
      : new Date(json["updatedAt"]),
  };
}

export function CourseLogToJSON(value?: CourseLog | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    date: value.date.toISOString().substr(0, 10),
    period: value.period,
    course: CourseToJSON(value.course),
    createdAt: value.createdAt.toISOString(),
    updatedAt:
      value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
  };
}
