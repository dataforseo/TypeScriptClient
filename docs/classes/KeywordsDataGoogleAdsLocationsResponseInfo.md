[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleAdsLocationsResponseInfo

# Class: KeywordsDataGoogleAdsLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsResponseInfo()

> **new KeywordsDataGoogleAdsLocationsResponseInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:117032

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:117028

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

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

main.ts:117036

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

main.ts:117058

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:117051
