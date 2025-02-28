[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataIdListResultInfo

# Class: AppDataIdListResultInfo

Defined in: main.ts:198492

## Implements

- [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataIdListResultInfo()

> **new AppDataIdListResultInfo**(`data`?): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

Defined in: main.ts:198518

#### Parameters

##### data?

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:198512

cost of the task, USD

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`cost`](../interfaces/IAppDataIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:198507

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_done`](../interfaces/IAppDataIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:198502

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IAppDataIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:198494

id of the task

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`id`](../interfaces/IAppDataIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:198514

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`metadata`](../interfaces/IAppDataIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:198510

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`status`](../interfaces/IAppDataIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:198497

URL of the task
URL you used for making an API call

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`url`](../interfaces/IAppDataIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:198527

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:198556

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

Defined in: main.ts:198549

#### Parameters

##### data

`any`

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)
