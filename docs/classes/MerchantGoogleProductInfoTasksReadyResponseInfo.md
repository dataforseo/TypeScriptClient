**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductInfoTasksReadyResponseInfo

# Class: MerchantGoogleProductInfoTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductInfoTasksReadyResponseInfo(data)

> **new MerchantGoogleProductInfoTasksReadyResponseInfo**(`data`?): [`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Returns

[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:174531

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23029

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23022

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:174527

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleProductInfoTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductInfoTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23019

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

main.ts:174535

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

main.ts:174557

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:174550
