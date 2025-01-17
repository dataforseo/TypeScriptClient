[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataErrorsResponseInfo

# Class: AppDataErrorsResponseInfo

Defined in: main.ts:198501

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataErrorsResponseInfo()

> **new AppDataErrorsResponseInfo**(`data`?): [`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

Defined in: main.ts:198507

#### Parameters

##### data?

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md)

#### Returns

[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`cost`](../interfaces/IAppDataErrorsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`status_code`](../interfaces/IAppDataErrorsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`status_message`](../interfaces/IAppDataErrorsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`AppDataErrorsTaskInfo`](AppDataErrorsTaskInfo.md)[]

Defined in: main.ts:198503

array of tasks

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`tasks`](../interfaces/IAppDataErrorsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`tasks_count`](../interfaces/IAppDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`tasks_error`](../interfaces/IAppDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`time`](../interfaces/IAppDataErrorsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md).[`version`](../interfaces/IAppDataErrorsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198511

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

Defined in: main.ts:198533

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

Defined in: main.ts:198526

#### Parameters

##### data

`any`

#### Returns

[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
