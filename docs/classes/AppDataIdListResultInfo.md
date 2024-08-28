[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataIdListResultInfo

# Class: AppDataIdListResultInfo

## Implements

- [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataIdListResultInfo()

> **new AppDataIdListResultInfo**(`data`?): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Defined in

main.ts:190289

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`cost`](../interfaces/IAppDataIdListResultInfo.md#cost)

#### Defined in

main.ts:190283

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_done`](../interfaces/IAppDataIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:190278

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IAppDataIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:190273

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`id`](../interfaces/IAppDataIdListResultInfo.md#id)

#### Defined in

main.ts:190265

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`metadata`](../interfaces/IAppDataIdListResultInfo.md#metadata)

#### Defined in

main.ts:190285

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`status`](../interfaces/IAppDataIdListResultInfo.md#status)

#### Defined in

main.ts:190281

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`url`](../interfaces/IAppDataIdListResultInfo.md#url)

#### Defined in

main.ts:190268

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:190298

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:190327

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Defined in

main.ts:190320
