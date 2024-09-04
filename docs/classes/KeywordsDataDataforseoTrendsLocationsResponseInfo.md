[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataDataforseoTrendsLocationsResponseInfo

# Class: KeywordsDataDataforseoTrendsLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsResponseInfo()

> **new KeywordsDataDataforseoTrendsLocationsResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:128213

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#cost)

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

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_code)

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

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`KeywordsDataDataforseoTrendsLocationsTaskInfo`](KeywordsDataDataforseoTrendsLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:128209

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#version)

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

main.ts:128217

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

main.ts:128239

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:128232
