**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantIdListResponseInfo

# Class: MerchantIdListResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantIdListResponseInfo(data)

> **new MerchantIdListResponseInfo**(`data`?): [`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md)

#### Returns

[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:168535

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`cost`](../interfaces/IMerchantIdListResponseInfo.md#cost)

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

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`status_code`](../interfaces/IMerchantIdListResponseInfo.md#status_code)

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

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`status_message`](../interfaces/IMerchantIdListResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`MerchantIdListTaskInfo`](MerchantIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`tasks`](../interfaces/IMerchantIdListResponseInfo.md#tasks)

#### Source

main.ts:168531

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`tasks_count`](../interfaces/IMerchantIdListResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`tasks_error`](../interfaces/IMerchantIdListResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`time`](../interfaces/IMerchantIdListResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md).[`version`](../interfaces/IMerchantIdListResponseInfo.md#version)

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

main.ts:168539

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

main.ts:168561

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:168554
