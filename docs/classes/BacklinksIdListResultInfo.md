[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIdListResultInfo

# Class: BacklinksIdListResultInfo

Defined in: main.ts:149044

## Implements

- [`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksIdListResultInfo()

> **new BacklinksIdListResultInfo**(`data`?): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

Defined in: main.ts:149070

#### Parameters

##### data?

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md)

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:149064

cost of the task, USD

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`cost`](../interfaces/IBacklinksIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:149059

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`datetime_done`](../interfaces/IBacklinksIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:149054

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`datetime_posted`](../interfaces/IBacklinksIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:149046

id of the task

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`id`](../interfaces/IBacklinksIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:149066

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`metadata`](../interfaces/IBacklinksIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:149062

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`status`](../interfaces/IBacklinksIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:149049

URL of the task
URL you used for making an API call

#### Implementation of

[`IBacklinksIdListResultInfo`](../interfaces/IBacklinksIdListResultInfo.md).[`url`](../interfaces/IBacklinksIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149079

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149108

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)

Defined in: main.ts:149101

#### Parameters

##### data

`any`

#### Returns

[`BacklinksIdListResultInfo`](BacklinksIdListResultInfo.md)
