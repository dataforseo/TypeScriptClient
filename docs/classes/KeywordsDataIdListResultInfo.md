[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataIdListResultInfo

# Class: KeywordsDataIdListResultInfo

Defined in: main.ts:125398

## Implements

- [`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataIdListResultInfo()

> **new KeywordsDataIdListResultInfo**(`data`?): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

Defined in: main.ts:125424

#### Parameters

##### data?

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md)

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:125418

cost of the task, USD

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`cost`](../interfaces/IKeywordsDataIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:125413

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_done`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:125408

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IKeywordsDataIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:125400

id of the task

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`id`](../interfaces/IKeywordsDataIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:125420

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`metadata`](../interfaces/IKeywordsDataIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:125416

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`status`](../interfaces/IKeywordsDataIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:125403

URL of the task
URL you used for making an API call

#### Implementation of

[`IKeywordsDataIdListResultInfo`](../interfaces/IKeywordsDataIdListResultInfo.md).[`url`](../interfaces/IKeywordsDataIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:125433

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:125462

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)

Defined in: main.ts:125455

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataIdListResultInfo`](KeywordsDataIdListResultInfo.md)
