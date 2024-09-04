[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForKeywordsLiveResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsLiveResponseInfo()

> **new KeywordsDataBingKeywordsForKeywordsLiveResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:132199

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#cost)

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

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#status_code)

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

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsLiveTaskInfo`](KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:132195

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md#version)

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

main.ts:132203

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

main.ts:132225

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:132218
