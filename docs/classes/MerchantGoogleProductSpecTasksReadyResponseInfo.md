[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTasksReadyResponseInfo

# Class: MerchantGoogleProductSpecTasksReadyResponseInfo

Defined in: main.ts:189257

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTasksReadyResponseInfo()

> **new MerchantGoogleProductSpecTasksReadyResponseInfo**(`data`?): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

Defined in: main.ts:189263

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)[]

Defined in: main.ts:189259

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:189267

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

Defined in: main.ts:189289

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

Defined in: main.ts:189282

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
