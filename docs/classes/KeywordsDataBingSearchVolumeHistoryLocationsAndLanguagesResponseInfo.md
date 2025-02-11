[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo

Defined in: main.ts:146093

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo()

> **new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

Defined in: main.ts:146099

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo.md)[]

Defined in: main.ts:146095

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146103

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

Defined in: main.ts:146125

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

Defined in: main.ts:146118

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
