[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleExtendedReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTasksReadyResultInfo()

> **new BusinessDataGoogleExtendedReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:222960

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:222952

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:222956

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:222945

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:222948

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:222950

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:222954

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:222969

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:222991

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTasksReadyResultInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:222984
