[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageAvailableFiltersResponseInfo

# Class: OnPageAvailableFiltersResponseInfo

Defined in: main.ts:164219

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageAvailableFiltersResponseInfo()

> **new OnPageAvailableFiltersResponseInfo**(`data`?): [`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

Defined in: main.ts:164224

#### Parameters

##### data?

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md)

#### Returns

[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`cost`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`status_code`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`status_message`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`OnPageAvailableFiltersTaskInfo`](OnPageAvailableFiltersTaskInfo.md)[]

Defined in: main.ts:164220

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`tasks`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`tasks_count`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`tasks_error`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`time`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[`version`](../interfaces/IOnPageAvailableFiltersResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:164228

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

Defined in: main.ts:164250

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

Defined in: main.ts:164243

#### Parameters

##### data

`any`

#### Returns

[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
