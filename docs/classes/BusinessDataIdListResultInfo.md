[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataIdListResultInfo

# Class: BusinessDataIdListResultInfo

Defined in: main.ts:209502

## Implements

- [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListResultInfo()

> **new BusinessDataIdListResultInfo**(`data`?): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

Defined in: main.ts:209528

#### Parameters

##### data?

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:209522

cost of the task, USD

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`cost`](../interfaces/IBusinessDataIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:209517

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_done`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:209512

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:209504

id of the task

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`id`](../interfaces/IBusinessDataIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:209524

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`metadata`](../interfaces/IBusinessDataIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:209520

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`status`](../interfaces/IBusinessDataIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:209507

URL of the task
URL you used for making an API call

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`url`](../interfaces/IBusinessDataIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:209537

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:209566

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

Defined in: main.ts:209559

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)
