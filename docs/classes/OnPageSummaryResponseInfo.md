[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageSummaryResponseInfo

# Class: OnPageSummaryResponseInfo

Defined in: main.ts:165971

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageSummaryResponseInfo()

> **new OnPageSummaryResponseInfo**(`data`?): [`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

Defined in: main.ts:165977

#### Parameters

##### data?

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md)

#### Returns

[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`cost`](../interfaces/IOnPageSummaryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`status_code`](../interfaces/IOnPageSummaryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`status_message`](../interfaces/IOnPageSummaryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageSummaryTaskInfo`](OnPageSummaryTaskInfo.md)[]

Defined in: main.ts:165973

array of tasks

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`tasks`](../interfaces/IOnPageSummaryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`tasks_count`](../interfaces/IOnPageSummaryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`tasks_error`](../interfaces/IOnPageSummaryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`time`](../interfaces/IOnPageSummaryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md).[`version`](../interfaces/IOnPageSummaryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165981

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

Defined in: main.ts:166003

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

Defined in: main.ts:165996

#### Parameters

##### data

`any`

#### Returns

[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
