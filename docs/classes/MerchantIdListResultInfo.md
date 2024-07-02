**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantIdListResultInfo

# Class: MerchantIdListResultInfo

## Implements

- [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantIdListResultInfo(data)

> **new MerchantIdListResultInfo**(`data`?): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

• **data?**: [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Source

main.ts:172013

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`cost`](../interfaces/IMerchantIdListResultInfo.md#cost)

#### Source

main.ts:172007

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_done`](../interfaces/IMerchantIdListResultInfo.md#datetime_done)

#### Source

main.ts:172002

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_posted`](../interfaces/IMerchantIdListResultInfo.md#datetime_posted)

#### Source

main.ts:171997

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`id`](../interfaces/IMerchantIdListResultInfo.md#id)

#### Source

main.ts:171989

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`metadata`](../interfaces/IMerchantIdListResultInfo.md#metadata)

#### Source

main.ts:172009

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`status`](../interfaces/IMerchantIdListResultInfo.md#status)

#### Source

main.ts:172005

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`url`](../interfaces/IMerchantIdListResultInfo.md#url)

#### Source

main.ts:171992

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:172022

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:172051

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Source

main.ts:172044
