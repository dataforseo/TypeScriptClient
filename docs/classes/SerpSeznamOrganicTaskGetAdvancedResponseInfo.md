[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetAdvancedResponseInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResponseInfo

Defined in: main.ts:84101

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetAdvancedResponseInfo()

> **new SerpSeznamOrganicTaskGetAdvancedResponseInfo**(`data`?): [`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:84107

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:84103

array of tasks

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84111

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84133

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:84126

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
