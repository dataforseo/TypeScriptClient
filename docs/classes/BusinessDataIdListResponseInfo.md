**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataIdListResponseInfo

# Class: BusinessDataIdListResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListResponseInfo(data)

> **new BusinessDataIdListResponseInfo**(`data`?): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md)

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:195233

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`cost`](../interfaces/IBusinessDataIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23060

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`status_code`](../interfaces/IBusinessDataIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23053

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`status_message`](../interfaces/IBusinessDataIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataIdListTaskInfo`](BusinessDataIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks)

#### Source

main.ts:195229

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`time`](../interfaces/IBusinessDataIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`version`](../interfaces/IBusinessDataIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23050

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

main.ts:195237

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

main.ts:195259

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:195252
