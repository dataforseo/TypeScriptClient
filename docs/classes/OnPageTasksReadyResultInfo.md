**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageTasksReadyResultInfo(data)

> **new OnPageTasksReadyResultInfo**(`data`?): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Source

main.ts:151728

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`date_posted`](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:151722

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageTasksReadyResultInfo.md#id)

#### Source

main.ts:151718

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

#### Source

main.ts:151724

***

### target?

> **`optional`** **target**: `string`

target website specified when setting a task

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`target`](../interfaces/IOnPageTasksReadyResultInfo.md#target)

#### Source

main.ts:151720

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:151737

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151757

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Source

main.ts:151750
