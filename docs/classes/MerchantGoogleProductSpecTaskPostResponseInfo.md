[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductSpecTaskPostResponseInfo

# Class: MerchantGoogleProductSpecTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTaskPostResponseInfo()

> **new MerchantGoogleProductSpecTaskPostResponseInfo**(`data`?): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:177225

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:24147

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:24140

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:24143

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:177221

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:24149

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:24151

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:24145

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:24137

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:177229

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:177251

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:177244
