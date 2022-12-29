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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Classroom
 */
export interface Classroom {
    /**
     * 
     * @type {number}
     * @memberof Classroom
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Classroom
     */
    grade: number;
    /**
     * 
     * @type {string}
     * @memberof Classroom
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Classroom
     */
    teacher: string;
    /**
     * 
     * @type {Date}
     * @memberof Classroom
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Classroom
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the Classroom interface.
 */
export function instanceOfClassroom(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "grade" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "teacher" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ClassroomFromJSON(json: any): Classroom {
    return ClassroomFromJSONTyped(json, false);
}

export function ClassroomFromJSONTyped(json: any, ignoreDiscriminator: boolean): Classroom {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'grade': json['grade'],
        'name': json['name'],
        'teacher': json['teacher'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function ClassroomToJSON(value?: Classroom | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'grade': value.grade,
        'name': value.name,
        'teacher': value.teacher,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

