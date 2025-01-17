[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTaskGetResponseInfo

# Class: KeywordsDataBingAudienceEstimationTaskGetResponseInfo

Defined in: main.ts:140983

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTaskGetResponseInfo()

> **new KeywordsDataBingAudienceEstimationTaskGetResponseInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

Defined in: main.ts:140989

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingAudienceEstimationTaskGetTaskInfo`](KeywordsDataBingAudienceEstimationTaskGetTaskInfo.md)[]

Defined in: main.ts:140985

array of tasks

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResponseInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:140993

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

Defined in: main.ts:141015

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

Defined in: main.ts:141008

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
