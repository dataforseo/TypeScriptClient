[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataIdListResultInfo

# Class: BusinessDataIdListResultInfo

## Implements

- [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListResultInfo()

> **new BusinessDataIdListResultInfo**(`data`?): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Defined in

main.ts:201695

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`cost`](../interfaces/IBusinessDataIdListResultInfo.md#cost)

#### Defined in

main.ts:201689

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_done`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:201684

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:201679

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`id`](../interfaces/IBusinessDataIdListResultInfo.md#id)

#### Defined in

main.ts:201671

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`metadata`](../interfaces/IBusinessDataIdListResultInfo.md#metadata)

#### Defined in

main.ts:201691

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`status`](../interfaces/IBusinessDataIdListResultInfo.md#status)

#### Defined in

main.ts:201687

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`url`](../interfaces/IBusinessDataIdListResultInfo.md#url)

#### Defined in

main.ts:201674

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:201704

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:201733

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Defined in

main.ts:201726
