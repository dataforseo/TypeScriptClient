[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTaskPostResponseInfo

# Class: MerchantGoogleProductSpecTaskPostResponseInfo

Defined in: main.ts:189447

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskPostResponseInfo()

> **new MerchantGoogleProductSpecTaskPostResponseInfo**(`data`?): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

Defined in: main.ts:189453

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)[]

Defined in: main.ts:189449

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:189457

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

Defined in: main.ts:189479

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

Defined in: main.ts:189472

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
