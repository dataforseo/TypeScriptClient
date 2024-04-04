**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpReviewsTasksReadyResultInfo

# Class: BusinessDataYelpReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpReviewsTasksReadyResultInfo(data)

> **new BusinessDataYelpReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Source

main.ts:210516

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:210508

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:210512

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#id)

#### Source

main.ts:210500

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#se)

#### Source

main.ts:210503

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:210506

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataYelpReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataYelpReviewsTasksReadyResultInfo.md#tag)

#### Source

main.ts:210510

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:210525

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:210547

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpReviewsTasksReadyResultInfo`](BusinessDataYelpReviewsTasksReadyResultInfo.md)

#### Source

main.ts:210540
