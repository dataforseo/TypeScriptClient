[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseAuditsResponseInfo

# Class: OnPageLighthouseAuditsResponseInfo

Defined in: main.ts:175505

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseAuditsResponseInfo()

> **new OnPageLighthouseAuditsResponseInfo**(`data`?): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

Defined in: main.ts:175511

#### Parameters

##### data?

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md)

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseAuditsTaskInfo`](OnPageLighthouseAuditsTaskInfo.md)[]

Defined in: main.ts:175507

array of tasks

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175515

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

Defined in: main.ts:175537

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

Defined in: main.ts:175530

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
