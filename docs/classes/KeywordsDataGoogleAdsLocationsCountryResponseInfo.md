[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleAdsLocationsCountryResponseInfo

# Class: KeywordsDataGoogleAdsLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsCountryResponseInfo()

> **new KeywordsDataGoogleAdsLocationsCountryResponseInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:117265

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24152

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24145

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24148

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsLocationsCountryTaskInfo`](KeywordsDataGoogleAdsLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:117261

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24154

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24156

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24150

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24142

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

main.ts:117269

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

main.ts:117291

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:117284
