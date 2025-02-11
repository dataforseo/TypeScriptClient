[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorReviewsTasksReadyResultInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyResultInfo

Defined in: main.ts:229478

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTasksReadyResultInfo()

> **new BusinessDataTripadvisorReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

Defined in: main.ts:229496

#### Parameters

##### data?

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:229488

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:229492

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:229481

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:229484

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:229486

search engine type

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:229490

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:229505

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:229527

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

Defined in: main.ts:229520

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)
