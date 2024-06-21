**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTasksReadyResponseInfo

# Class: MerchantAmazonAsinTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonAsinTasksReadyResponseInfo(data)

> **new MerchantAmazonAsinTasksReadyResponseInfo**(`data`?): [`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md)

#### Returns

[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:181183

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:181179

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`time`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResponseInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md).[`version`](../interfaces/IMerchantAmazonAsinTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:181187

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

main.ts:181209

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:181202
