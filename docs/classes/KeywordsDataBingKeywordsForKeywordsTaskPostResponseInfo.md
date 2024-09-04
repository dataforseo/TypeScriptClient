[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo()

> **new KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:134359

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:134355

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:134363

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

main.ts:134385

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:134378
