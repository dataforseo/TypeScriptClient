[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorSearchTaskGetResponseInfo

# Class: BusinessDataTripadvisorSearchTaskGetResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskGetResponseInfo()

> **new BusinessDataTripadvisorSearchTaskGetResponseInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:213433

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#cost)

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

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#status_code)

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

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorSearchTaskGetTaskInfo`](BusinessDataTripadvisorSearchTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:213429

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResponseInfo.md#version)

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

main.ts:213437

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

main.ts:213459

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:213452
