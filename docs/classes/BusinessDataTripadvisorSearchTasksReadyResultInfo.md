[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataTripadvisorSearchTasksReadyResultInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTasksReadyResultInfo()

> **new BusinessDataTripadvisorSearchTasksReadyResultInfo**(`data`?): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:217680

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:217672

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:217676

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)

#### Defined in

main.ts:217665

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)

#### Defined in

main.ts:217668

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:217670

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:217674

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:217689

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:217711

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Defined in

main.ts:217704
