**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTaskPostResponseInfo

# Class: KeywordsDataBingKeywordsForSiteTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTaskPostResponseInfo(data)

> **new KeywordsDataBingKeywordsForSiteTaskPostResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:133171

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataBingKeywordsForSiteTaskPostTaskInfo`](KeywordsDataBingKeywordsForSiteTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#tasks)

#### Source

main.ts:133167

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:133175

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

main.ts:133197

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:133190
