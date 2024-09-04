[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleProductSpecTasksReadyResponseInfo

# Class: MerchantGoogleProductSpecTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTasksReadyResponseInfo()

> **new MerchantGoogleProductSpecTasksReadyResponseInfo**(`data`?): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:181651

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:181647

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

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

main.ts:181655

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

main.ts:181677

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:181670
