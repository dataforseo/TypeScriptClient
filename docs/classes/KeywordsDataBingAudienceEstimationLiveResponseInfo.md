[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveResponseInfo

# Class: KeywordsDataBingAudienceEstimationLiveResponseInfo

Defined in: main.ts:141559

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveResponseInfo()

> **new KeywordsDataBingAudienceEstimationLiveResponseInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)

Defined in: main.ts:141565

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingAudienceEstimationLiveTaskInfo`](KeywordsDataBingAudienceEstimationLiveTaskInfo.md)[]

Defined in: main.ts:141561

array of tasks

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:141569

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

Defined in: main.ts:141591

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)

Defined in: main.ts:141584

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
