[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTasksReadyResultInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTasksReadyResultInfo()

> **new BusinessDataTrustpilotSearchTasksReadyResultInfo**(`data`?): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:225696

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:225688

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:225692

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)

#### Defined in

main.ts:225681

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)

#### Defined in

main.ts:225684

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:225686

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:225690

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:225705

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:225727

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:225720
