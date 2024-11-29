[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIdListResultInfo

# Class: BacklinksIdListResultInfo

## Implements

- [`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksIdListResultInfo()

> **new BacklinksIdListResultInfo**(`data`?): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Parameters

##### data?

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md)

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Defined in

main.ts:148838

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`cost`](../interfaces/IBacklinksIdListResultInfo.md#cost)

#### Defined in

main.ts:148832

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`datetime_done`](../interfaces/IBacklinksIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:148827

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`datetime_posted`](../interfaces/IBacklinksIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:148822

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`id`](../interfaces/IBacklinksIdListResultInfo.md#id)

#### Defined in

main.ts:148814

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`metadata`](../interfaces/IBacklinksIdListResultInfo.md#metadata)

#### Defined in

main.ts:148834

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`status`](../interfaces/IBacklinksIdListResultInfo.md#status)

#### Defined in

main.ts:148830

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`url`](../interfaces/IBacklinksIdListResultInfo.md#url)

#### Defined in

main.ts:148817

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:148847

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:148876

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

#### Defined in

main.ts:148869
