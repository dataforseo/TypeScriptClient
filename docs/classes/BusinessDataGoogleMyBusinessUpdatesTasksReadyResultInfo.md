**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo(data)

> **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Source

main.ts:197786

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:197778

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:197782

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)

#### Source

main.ts:197773

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)

#### Source

main.ts:197776

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

#### Source

main.ts:197780

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:197795

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:197816

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Source

main.ts:197809
