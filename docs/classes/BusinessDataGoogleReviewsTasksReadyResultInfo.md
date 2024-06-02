**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTasksReadyResultInfo(data)

> **new BusinessDataGoogleReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Source

main.ts:205830

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:205822

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:205826

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)

#### Source

main.ts:205815

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)

#### Source

main.ts:205818

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:205820

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

#### Source

main.ts:205824

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205839

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205861

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Source

main.ts:205854
