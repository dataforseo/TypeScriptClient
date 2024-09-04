[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantIdListResultInfo

# Class: MerchantIdListResultInfo

## Implements

- [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantIdListResultInfo()

> **new MerchantIdListResultInfo**(`data`?): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

• **data?**: [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Defined in

main.ts:176538

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`cost`](../interfaces/IMerchantIdListResultInfo.md#cost)

#### Defined in

main.ts:176532

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_done`](../interfaces/IMerchantIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:176527

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_posted`](../interfaces/IMerchantIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:176522

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`id`](../interfaces/IMerchantIdListResultInfo.md#id)

#### Defined in

main.ts:176514

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`metadata`](../interfaces/IMerchantIdListResultInfo.md#metadata)

#### Defined in

main.ts:176534

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`status`](../interfaces/IMerchantIdListResultInfo.md#status)

#### Defined in

main.ts:176530

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`url`](../interfaces/IMerchantIdListResultInfo.md#url)

#### Defined in

main.ts:176517

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:176547

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:176576

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

#### Defined in

main.ts:176569
