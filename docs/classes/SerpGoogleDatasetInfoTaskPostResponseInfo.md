[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTaskPostResponseInfo

# Class: SerpGoogleDatasetInfoTaskPostResponseInfo

Defined in: main.ts:59087

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoTaskPostResponseInfo()

> **new SerpGoogleDatasetInfoTaskPostResponseInfo**(`data`?): [`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

Defined in: main.ts:59093

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)[]

Defined in: main.ts:59089

array of tasks

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:59097

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

Defined in: main.ts:59119

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

Defined in: main.ts:59112

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
