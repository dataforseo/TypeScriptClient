**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsCountryResponseInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsCountryResponseInfo(data)

> **new KeywordsDataDataforseoTrendsLocationsCountryResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:128605

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#cost)

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

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#status_code)

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

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks)

#### Source

main.ts:128601

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md#version)

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

main.ts:128609

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

main.ts:128631

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:128624
