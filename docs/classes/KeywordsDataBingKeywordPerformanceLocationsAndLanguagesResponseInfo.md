**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo

# Class: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo(data)

> **new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:132201

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks)

#### Source

main.ts:132197

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:132205

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

main.ts:132227

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:132220
