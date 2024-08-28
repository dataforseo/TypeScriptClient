[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageTasksReadyResultInfo()

> **new OnPageTasksReadyResultInfo**(`data`?): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Defined in

main.ts:156421

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`date_posted`](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:156415

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageTasksReadyResultInfo.md#id)

#### Defined in

main.ts:156411

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:156417

***

### target?

> `optional` **target**: `string`

target website specified when setting a task

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`target`](../interfaces/IOnPageTasksReadyResultInfo.md#target)

#### Defined in

main.ts:156413

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:156430

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:156450

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Defined in

main.ts:156443
