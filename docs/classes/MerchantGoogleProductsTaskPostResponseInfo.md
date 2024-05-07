**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskPostResponseInfo

# Class: MerchantGoogleProductsTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskPostResponseInfo(data)

> **new MerchantGoogleProductsTaskPostResponseInfo**(`data`?): [`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md)

#### Returns

[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:171565

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`cost`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`status_code`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`status_message`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`tasks`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks)

#### Source

main.ts:171561

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`time`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantGoogleProductsTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md).[`version`](../interfaces/IMerchantGoogleProductsTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23311

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

main.ts:171569

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

main.ts:171591

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:171584
