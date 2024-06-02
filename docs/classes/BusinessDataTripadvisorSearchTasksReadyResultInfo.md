**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTasksReadyResultInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTasksReadyResultInfo(data)

> **new BusinessDataTripadvisorSearchTasksReadyResultInfo**(`data`?): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Source

main.ts:210527

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:210519

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:210523

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)

#### Source

main.ts:210512

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)

#### Source

main.ts:210515

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se_type)

#### Source

main.ts:210517

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

#### Source

main.ts:210521

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:210536

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:210558

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Source

main.ts:210551
