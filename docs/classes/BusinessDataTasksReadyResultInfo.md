**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTasksReadyResultInfo

# Class: BusinessDataTasksReadyResultInfo

## Implements

- [`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTasksReadyResultInfo(data)

> **new BusinessDataTasksReadyResultInfo**(`data`?): [`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Source

main.ts:200408

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:200400

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:200404

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTasksReadyResultInfo.md#id)

#### Source

main.ts:200393

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se)

#### Source

main.ts:200396

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se_type)

#### Source

main.ts:200398

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTasksReadyResultInfo.md#tag)

#### Source

main.ts:200402

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:200417

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:200439

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Source

main.ts:200432
