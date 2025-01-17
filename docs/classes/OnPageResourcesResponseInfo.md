[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourcesResponseInfo

# Class: OnPageResourcesResponseInfo

Defined in: main.ts:168415

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageResourcesResponseInfo()

> **new OnPageResourcesResponseInfo**(`data`?): [`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

Defined in: main.ts:168421

#### Parameters

##### data?

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md)

#### Returns

[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`cost`](../interfaces/IOnPageResourcesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`status_code`](../interfaces/IOnPageResourcesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`status_message`](../interfaces/IOnPageResourcesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageResourcesTaskInfo`](OnPageResourcesTaskInfo.md)[]

Defined in: main.ts:168417

array of tasks

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks`](../interfaces/IOnPageResourcesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks_count`](../interfaces/IOnPageResourcesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`tasks_error`](../interfaces/IOnPageResourcesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`time`](../interfaces/IOnPageResourcesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageResourcesResponseInfo`](../interfaces/IOnPageResourcesResponseInfo.md).[`version`](../interfaces/IOnPageResourcesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168425

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

Defined in: main.ts:168447

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

Defined in: main.ts:168440

#### Parameters

##### data

`any`

#### Returns

[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
