[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTasksReadyResponseInfo

# Class: MerchantGoogleProductInfoTasksReadyResponseInfo

Defined in: main.ts:190785

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTasksReadyResponseInfo()

> **new MerchantGoogleProductInfoTasksReadyResponseInfo**(`data`?): [`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

Defined in: main.ts:190791

#### Parameters

##### data?

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Returns

[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)[]

Defined in: main.ts:190787

array of tasks

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190795

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

Defined in: main.ts:190817

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

Defined in: main.ts:190810

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
