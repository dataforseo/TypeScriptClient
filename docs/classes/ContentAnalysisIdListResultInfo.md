[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisIdListResultInfo

# Class: ContentAnalysisIdListResultInfo

## Implements

- [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisIdListResultInfo()

> **new ContentAnalysisIdListResultInfo**(`data`?): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md)

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Defined in

main.ts:164814

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`cost`](../interfaces/IContentAnalysisIdListResultInfo.md#cost)

#### Defined in

main.ts:164808

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_done`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:164803

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`datetime_posted`](../interfaces/IContentAnalysisIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:164798

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`id`](../interfaces/IContentAnalysisIdListResultInfo.md#id)

#### Defined in

main.ts:164790

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`metadata`](../interfaces/IContentAnalysisIdListResultInfo.md#metadata)

#### Defined in

main.ts:164810

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`status`](../interfaces/IContentAnalysisIdListResultInfo.md#status)

#### Defined in

main.ts:164806

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IContentAnalysisIdListResultInfo`](../interfaces/IContentAnalysisIdListResultInfo.md).[`url`](../interfaces/IContentAnalysisIdListResultInfo.md#url)

#### Defined in

main.ts:164793

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:164823

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:164852

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisIdListResultInfo`](ContentAnalysisIdListResultInfo.md)

#### Defined in

main.ts:164845
