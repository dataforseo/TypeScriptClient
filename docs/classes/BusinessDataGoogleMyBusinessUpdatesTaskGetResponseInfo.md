[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo

Defined in: main.ts:216535

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo()

> **new BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

Defined in: main.ts:216541

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo.md)[]

Defined in: main.ts:216537

array of tasks

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:216545

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

Defined in: main.ts:216567

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

Defined in: main.ts:216560

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
