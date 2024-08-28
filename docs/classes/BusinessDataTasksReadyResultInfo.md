[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataTasksReadyResultInfo

# Class: BusinessDataTasksReadyResultInfo

## Implements

- [`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTasksReadyResultInfo()

> **new BusinessDataTasksReadyResultInfo**(`data`?): [`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Defined in

main.ts:205471

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:205463

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:205467

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTasksReadyResultInfo.md#id)

#### Defined in

main.ts:205456

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se)

#### Defined in

main.ts:205459

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:205461

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTasksReadyResultInfo`](../interfaces/IBusinessDataTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:205465

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:205480

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:205502

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTasksReadyResultInfo`](BusinessDataTasksReadyResultInfo.md)

#### Defined in

main.ts:205495
