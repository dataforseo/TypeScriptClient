[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleExtendedReviewsTasksReadyResultInfo

Defined in: main.ts:223010

## Implements

- [`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTasksReadyResultInfo()

> **new BusinessDataGoogleExtendedReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

Defined in: main.ts:223028

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:223020

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:223024

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:223013

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:223016

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:223018

type of search engine

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:223022

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:223037

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:223059

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

Defined in: main.ts:223052

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)
