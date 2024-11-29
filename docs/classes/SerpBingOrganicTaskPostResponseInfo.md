[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskPostResponseInfo

# Class: SerpBingOrganicTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskPostResponseInfo()

> **new SerpBingOrganicTaskPostResponseInfo**(`data`?): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Parameters

##### data?

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:63812

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:25217

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:25210

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:25213

***

### tasks?

> `optional` **tasks**: [`SerpBingOrganicTaskPostTaskInfo`](SerpBingOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:63808

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:25219

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:25221

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:25215

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:25207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:63816

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:63838

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:63831
