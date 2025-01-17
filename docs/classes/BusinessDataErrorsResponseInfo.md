[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataErrorsResponseInfo

# Class: BusinessDataErrorsResponseInfo

Defined in: main.ts:210013

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsResponseInfo()

> **new BusinessDataErrorsResponseInfo**(`data`?): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

Defined in: main.ts:210019

#### Parameters

##### data?

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md)

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`cost`](../interfaces/IBusinessDataErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`status_code`](../interfaces/IBusinessDataErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`status_message`](../interfaces/IBusinessDataErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataErrorsTaskInfo`](BusinessDataErrorsTaskInfo.md)[]

Defined in: main.ts:210015

array of tasks

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`time`](../interfaces/IBusinessDataErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`version`](../interfaces/IBusinessDataErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210023

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

Defined in: main.ts:210045

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

Defined in: main.ts:210038

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
