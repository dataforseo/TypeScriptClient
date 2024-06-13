**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsCategoriesResponseInfo

# Class: KeywordsDataGoogleTrendsCategoriesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsCategoriesResponseInfo(data)

> **new KeywordsDataGoogleTrendsCategoriesResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:123742

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23214

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23207

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataGoogleTrendsCategoriesTaskInfo`](KeywordsDataGoogleTrendsCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#tasks)

#### Source

main.ts:123738

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsCategoriesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsCategoriesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23204

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

main.ts:123746

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

main.ts:123768

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:123761
