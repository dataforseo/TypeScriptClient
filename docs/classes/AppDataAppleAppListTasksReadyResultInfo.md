[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTasksReadyResultInfo

# Class: AppDataAppleAppListTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataAppleAppListTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataAppleAppListTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataAppleAppListTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataAppleAppListTasksReadyResultInfo.md#id)
- [se](AppDataAppleAppListTasksReadyResultInfo.md#se)
- [tag](AppDataAppleAppListTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataAppleAppListTasksReadyResultInfo.md#init)
- [toJSON](AppDataAppleAppListTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataAppleAppListTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTasksReadyResultInfo**(`data?`): [`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md) |

#### Returns

[`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:190701

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:190690

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App List task

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:190694

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:190697

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[id](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#id)

#### Defined in

main.ts:190686

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[se](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#se)

#### Defined in

main.ts:190688

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataAppleAppListTasksReadyResultInfo](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[tag](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:190692

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:190710

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:190732

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:190725
