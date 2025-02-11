[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo

Defined in: main.ts:127655

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo()

> **new KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

Defined in: main.ts:127661

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)[]

Defined in: main.ts:127657

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:127665

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

Defined in: main.ts:127687

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

Defined in: main.ts:127680

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
