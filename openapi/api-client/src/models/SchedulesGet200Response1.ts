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
import type { Schedule } from "./Schedule";
import {
  ScheduleFromJSON,
  ScheduleFromJSONTyped,
  ScheduleToJSON,
} from "./Schedule";

/**
 *
 * @export
 * @interface SchedulesGet200Response1
 */
export interface SchedulesGet200Response1 {
  /**
   *
   * @type {Schedule}
   * @memberof SchedulesGet200Response1
   */
  data?: Schedule;
}

/**
 * Check if a given object implements the SchedulesGet200Response1 interface.
 */
export function instanceOfSchedulesGet200Response1(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SchedulesGet200Response1FromJSON(
  json: any
): SchedulesGet200Response1 {
  return SchedulesGet200Response1FromJSONTyped(json, false);
}

export function SchedulesGet200Response1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SchedulesGet200Response1 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: !exists(json, "data") ? undefined : ScheduleFromJSON(json["data"]),
  };
}

export function SchedulesGet200Response1ToJSON(
  value?: SchedulesGet200Response1 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: ScheduleToJSON(value.data),
  };
}