**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTasksReadyResponseInfo

# Class: MerchantGoogleProductSpecTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductSpecTasksReadyResponseInfo(data)

> **new MerchantGoogleProductSpecTasksReadyResponseInfo**(`data`?): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:179819

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:179815

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:179823

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:179845

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:179838
