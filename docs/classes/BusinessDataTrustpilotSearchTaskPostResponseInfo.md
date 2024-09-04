[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTrustpilotSearchTaskPostResponseInfo

# Class: BusinessDataTrustpilotSearchTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTaskPostResponseInfo()

> **new BusinessDataTrustpilotSearchTaskPostResponseInfo**(`data`?): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:210667

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`cost`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#cost)

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

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_code)

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

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:210663

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`time`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[`version`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#version)

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

main.ts:210671

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

main.ts:210693

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:210686
