[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo

Defined in: main.ts:137139

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo()

> **new KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo**(`data`?): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

Defined in: main.ts:137145

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`cost`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)[]

Defined in: main.ts:137141

array of tasks

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`time`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md).[`version`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137149

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

Defined in: main.ts:137171

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

Defined in: main.ts:137164

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
