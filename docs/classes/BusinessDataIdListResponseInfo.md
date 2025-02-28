[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataIdListResponseInfo

# Class: BusinessDataIdListResponseInfo

Defined in: main.ts:210173

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListResponseInfo()

> **new BusinessDataIdListResponseInfo**(`data`?): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

Defined in: main.ts:210179

#### Parameters

##### data?

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md)

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`cost`](../interfaces/IBusinessDataIdListResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`status_code`](../interfaces/IBusinessDataIdListResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`status_message`](../interfaces/IBusinessDataIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataIdListTaskInfo`](BusinessDataIdListTaskInfo.md)[]

Defined in: main.ts:210175

array of tasks

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`time`](../interfaces/IBusinessDataIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md).[`version`](../interfaces/IBusinessDataIdListResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210183

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

Defined in: main.ts:210205

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

Defined in: main.ts:210198

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
