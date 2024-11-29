[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleReviewsTasksReadyResultInfo()

> **new BusinessDataGoogleReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:221826

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:221818

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:221822

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:221811

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:221814

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:221816

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:221820

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:221835

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:221857

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:221850
