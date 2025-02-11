[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleReviewsTasksReadyResultInfo

Defined in: main.ts:222384

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTasksReadyResultInfo()

> **new BusinessDataGoogleReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

Defined in: main.ts:222402

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:222394

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:222398

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:222387

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:222390

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:222392

type of search engine

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:222396

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:222411

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:222433

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

Defined in: main.ts:222426

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)
