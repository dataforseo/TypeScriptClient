[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisIdListResultInfo

# Class: ContentAnalysisIdListResultInfo

Defined in: main.ts:176478

## Implements

- [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListResultInfo()

> **new ContentAnalysisIdListResultInfo**(`data`?): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

Defined in: main.ts:176504

#### Parameters

##### data?

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:176498

cost of the task, USD

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`cost`](../interfaces/IContentAnalysisIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:176493

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_done`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:176488

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_posted`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:176480

id of the task

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`id`](../interfaces/IContentAnalysisIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:176500

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`metadata`](../interfaces/IContentAnalysisIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:176496

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`status`](../interfaces/IContentAnalysisIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:176483

URL of the task
URL you used for making an API call

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`url`](../interfaces/IContentAnalysisIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176513

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:176542

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

Defined in: main.ts:176535

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)
