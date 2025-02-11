[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTaskPostResponseInfo

# Class: BusinessDataTripadvisorSearchTaskPostResponseInfo

Defined in: main.ts:228445

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskPostResponseInfo()

> **new BusinessDataTripadvisorSearchTaskPostResponseInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

Defined in: main.ts:228451

#### Parameters

##### data?

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorSearchTaskPostTaskInfo`](BusinessDataTripadvisorSearchTaskPostTaskInfo.md)[]

Defined in: main.ts:228447

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228455

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

Defined in: main.ts:228477

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

Defined in: main.ts:228470

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
