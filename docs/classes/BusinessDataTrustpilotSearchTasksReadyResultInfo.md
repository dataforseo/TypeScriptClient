**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTasksReadyResultInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTrustpilotSearchTasksReadyResultInfo(data)

> **new BusinessDataTrustpilotSearchTasksReadyResultInfo**(`data`?): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Source

main.ts:210615

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:210607

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:210611

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)

#### Source

main.ts:210600

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)

#### Source

main.ts:210603

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se_type)

#### Source

main.ts:210605

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

#### Source

main.ts:210609

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:210624

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:210646

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Source

main.ts:210639
