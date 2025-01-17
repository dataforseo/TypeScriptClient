[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingLocationsResponseInfo

# Class: KeywordsDataBingLocationsResponseInfo

Defined in: main.ts:138317

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingLocationsResponseInfo()

> **new KeywordsDataBingLocationsResponseInfo**(`data`?): [`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)

Defined in: main.ts:138323

#### Parameters

##### data?

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md)

#### Returns

[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingLocationsTaskInfo`](KeywordsDataBingLocationsTaskInfo.md)[]

Defined in: main.ts:138319

array of tasks

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingLocationsResponseInfo`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138327

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138349

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)

Defined in: main.ts:138342

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
