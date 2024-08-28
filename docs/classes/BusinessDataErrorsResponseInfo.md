[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataErrorsResponseInfo

# Class: BusinessDataErrorsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataErrorsResponseInfo()

> **new BusinessDataErrorsResponseInfo**(`data`?): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md)

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:202186

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`cost`](../interfaces/IBusinessDataErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`status_code`](../interfaces/IBusinessDataErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`status_message`](../interfaces/IBusinessDataErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`BusinessDataErrorsTaskInfo`](BusinessDataErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks)

#### Defined in

main.ts:202182

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`time`](../interfaces/IBusinessDataErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md).[`version`](../interfaces/IBusinessDataErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:202190

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

main.ts:202212

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:202205
