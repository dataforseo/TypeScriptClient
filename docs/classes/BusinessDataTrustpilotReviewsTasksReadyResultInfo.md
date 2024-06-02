**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotReviewsTasksReadyResultInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotReviewsTasksReadyResultInfo(data)

> **new BusinessDataTrustpilotReviewsTasksReadyResultInfo**(`data`?): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Source

main.ts:209027

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:209019

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:209023

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)

#### Source

main.ts:209012

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)

#### Source

main.ts:209015

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:209017

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

#### Source

main.ts:209021

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209036

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209058

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Source

main.ts:209051
