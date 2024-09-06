[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocalPackTaskGetHtmlResponseInfo

# Class: SerpBingLocalPackTaskGetHtmlResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetHtmlResponseInfo()

> **new SerpBingLocalPackTaskGetHtmlResponseInfo**(`data`?): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:60220

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:60216

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:60224

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:60246

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:60239
