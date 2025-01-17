[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsAvailableFiltersResponseInfo

# Class: BusinessDataBusinessListingsAvailableFiltersResponseInfo

Defined in: main.ts:210535

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsAvailableFiltersResponseInfo()

> **new BusinessDataBusinessListingsAvailableFiltersResponseInfo**(`data`?): [`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

Defined in: main.ts:210540

#### Parameters

##### data?

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

#### Returns

[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataBusinessListingsAvailableFiltersTaskInfo`](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md)[]

Defined in: main.ts:210536

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`time`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataBusinessListingsAvailableFiltersResponseInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md).[`version`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:210544

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

Defined in: main.ts:210566

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

Defined in: main.ts:210559

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
