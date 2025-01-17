[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo

Defined in: main.ts:128069

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo()

> **new KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo**(`data`?): [`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:128075

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)[]

Defined in: main.ts:128071

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:128079

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

Defined in: main.ts:128101

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

Defined in: main.ts:128094

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
