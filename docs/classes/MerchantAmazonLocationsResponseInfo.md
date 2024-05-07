**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsResponseInfo

# Class: MerchantAmazonLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsResponseInfo(data)

> **new MerchantAmazonLocationsResponseInfo**(`data`?): [`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md)

#### Returns

[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:177209

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`cost`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#cost)

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

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`status_code`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#status_code)

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

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`status_message`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`MerchantAmazonLocationsTaskInfo`](MerchantAmazonLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`tasks`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks)

#### Source

main.ts:177205

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`tasks_count`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`tasks_error`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`time`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[`version`](../interfaces/IMerchantAmazonLocationsResponseInfo.md#version)

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

main.ts:177213

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

main.ts:177235

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:177228
