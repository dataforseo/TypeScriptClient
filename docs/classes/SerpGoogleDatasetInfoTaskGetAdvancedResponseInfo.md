[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo

# Class: SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo

Defined in: main.ts:59747

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo()

> **new SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:59753

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo`](SerpGoogleDatasetInfoTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:59749

array of tasks

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59757

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

Defined in: main.ts:59779

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

Defined in: main.ts:59772

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
