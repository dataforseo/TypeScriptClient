[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorLocationsResponseInfo

# Class: BusinessDataTripadvisorLocationsResponseInfo

Defined in: main.ts:227797

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsResponseInfo()

> **new BusinessDataTripadvisorLocationsResponseInfo**(`data`?): [`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

Defined in: main.ts:227803

#### Parameters

##### data?

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)[]

Defined in: main.ts:227799

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227807

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

Defined in: main.ts:227829

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

Defined in: main.ts:227822

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
