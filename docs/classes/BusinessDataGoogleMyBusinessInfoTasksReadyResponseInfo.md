**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo(data)

> **new BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:198792

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:198788

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:198796

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:198818

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:198811
