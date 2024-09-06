[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorReviewsTasksReadyResultInfo

# Class: BusinessDataTripadvisorReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorReviewsTasksReadyResultInfo()

> **new BusinessDataTripadvisorReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:213977

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:213969

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:213973

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:213962

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:213965

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:213967

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:213971

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:213986

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:214008

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:214001
