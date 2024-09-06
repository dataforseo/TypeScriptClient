[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduOrganicTaskPostResponseInfo

# Class: SerpBaiduOrganicTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskPostResponseInfo()

> **new SerpBaiduOrganicTaskPostResponseInfo**(`data`?): [`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:69857

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#cost)

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

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#status_code)

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

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTaskPostTaskInfo`](SerpBaiduOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:69853

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskPostResponseInfo`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskPostResponseInfo.md#version)

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

main.ts:69861

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

main.ts:69883

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:69876
