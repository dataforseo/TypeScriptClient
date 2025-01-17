[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTasksReadyResultInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResultInfo

Defined in: main.ts:226502

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTasksReadyResultInfo()

> **new BusinessDataTrustpilotReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

Defined in: main.ts:226520

#### Parameters

##### data?

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:226512

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:226516

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:226505

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:226508

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:226510

search engine type

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:226514

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226529

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226551

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

Defined in: main.ts:226544

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)
