[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorSearchTaskPostResponseInfo

# Class: BusinessDataTripadvisorSearchTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskPostResponseInfo()

> **new BusinessDataTripadvisorSearchTaskPostResponseInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:212903

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#cost)

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

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_code)

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

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorSearchTaskPostTaskInfo`](BusinessDataTripadvisorSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:212899

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#version)

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

main.ts:212907

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

main.ts:212929

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:212922
