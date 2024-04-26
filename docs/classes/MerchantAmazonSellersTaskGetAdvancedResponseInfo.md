**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetAdvancedResponseInfo

# Class: MerchantAmazonSellersTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonSellersTaskGetAdvancedResponseInfo(data)

> **new MerchantAmazonSellersTaskGetAdvancedResponseInfo**(`data`?): [`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:181050

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:181046

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonSellersTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:181054

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

main.ts:181076

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:181069
