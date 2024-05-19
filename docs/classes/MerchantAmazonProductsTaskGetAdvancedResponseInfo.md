**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetAdvancedResponseInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetAdvancedResponseInfo(data)

> **new MerchantAmazonProductsTaskGetAdvancedResponseInfo**(`data`?): [`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:179308

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:179304

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:179312

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

main.ts:179334

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:179327
