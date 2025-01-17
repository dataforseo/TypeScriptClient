[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

Defined in: main.ts:165002

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageTasksReadyResultInfo()

> **new OnPageTasksReadyResultInfo**(`data`?): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

Defined in: main.ts:165015

#### Parameters

##### data?

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:165009

date when the task was posted (in the UTC format)

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`date_posted`](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:165005

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageTasksReadyResultInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:165011

user-defined task identifier

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:165007

target website specified when setting a task

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`target`](../interfaces/IOnPageTasksReadyResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165024

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165044

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

Defined in: main.ts:165037

#### Parameters

##### data

`any`

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)
