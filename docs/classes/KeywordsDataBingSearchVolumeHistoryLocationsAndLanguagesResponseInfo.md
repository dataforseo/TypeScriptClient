**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo

# Class: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo(data)

> **new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:137291

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`cost`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks)

#### Source

main.ts:137287

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`time`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md).[`version`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:137295

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:137317

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:137310
