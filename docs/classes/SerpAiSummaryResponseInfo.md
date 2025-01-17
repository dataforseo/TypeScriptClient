[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpAiSummaryResponseInfo

# Class: SerpAiSummaryResponseInfo

Defined in: main.ts:26712

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryResponseInfo()

> **new SerpAiSummaryResponseInfo**(`data`?): [`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

Defined in: main.ts:26718

#### Parameters

##### data?

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md)

#### Returns

[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`cost`](../interfaces/ISerpAiSummaryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`status_code`](../interfaces/ISerpAiSummaryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`status_message`](../interfaces/ISerpAiSummaryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpAiSummaryTaskInfo`](SerpAiSummaryTaskInfo.md)[]

Defined in: main.ts:26714

array of tasks

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`tasks`](../interfaces/ISerpAiSummaryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`tasks_count`](../interfaces/ISerpAiSummaryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`tasks_error`](../interfaces/ISerpAiSummaryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`time`](../interfaces/ISerpAiSummaryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md).[`version`](../interfaces/ISerpAiSummaryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26722

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

Defined in: main.ts:26744

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

Defined in: main.ts:26737

#### Parameters

##### data

`any`

#### Returns

[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
