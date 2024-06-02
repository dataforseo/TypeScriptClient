**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

# Class: KeywordsDataBingKeywordPerformanceTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTaskPostResponseInfo(data)

> **new KeywordsDataBingKeywordPerformanceTaskPostResponseInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:133510

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23060

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23053

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks)

#### Source

main.ts:133506

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23050

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:133514

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:133536

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:133529
