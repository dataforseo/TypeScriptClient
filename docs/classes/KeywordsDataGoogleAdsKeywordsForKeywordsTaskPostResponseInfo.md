[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:119961

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:119957

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:119965

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

main.ts:119987

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:119980
