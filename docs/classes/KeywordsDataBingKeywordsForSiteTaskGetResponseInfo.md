[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTaskGetResponseInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResponseInfo

Defined in: main.ts:142249

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTaskGetResponseInfo()

> **new KeywordsDataBingKeywordsForSiteTaskGetResponseInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

Defined in: main.ts:142255

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)[]

Defined in: main.ts:142251

array of tasks

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142259

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

Defined in: main.ts:142281

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

Defined in: main.ts:142274

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
