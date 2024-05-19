**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskPostResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskPostResponseInfo(data)

> **new KeywordsDataGoogleTrendsExploreTaskPostResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:123767

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataGoogleTrendsExploreTaskPostTaskInfo`](KeywordsDataGoogleTrendsExploreTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks)

#### Source

main.ts:123763

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:123771

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

main.ts:123793

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:123786
