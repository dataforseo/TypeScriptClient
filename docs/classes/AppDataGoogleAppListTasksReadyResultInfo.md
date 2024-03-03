[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTasksReadyResultInfo

# Class: AppDataGoogleAppListTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataGoogleAppListTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataGoogleAppListTasksReadyResultInfo.md#id)
- [se](AppDataGoogleAppListTasksReadyResultInfo.md#se)
- [tag](AppDataGoogleAppListTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataGoogleAppListTasksReadyResultInfo.md#init)
- [toJSON](AppDataGoogleAppListTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTasksReadyResultInfo**(`data?`): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md) |

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:178746

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:178735

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App List task

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:178739

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:178742

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[id](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#id)

#### Defined in

main.ts:178731

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[se](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se)

#### Defined in

main.ts:178733

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataGoogleAppListTasksReadyResultInfo](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[tag](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:178737

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

main.ts:178755

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

main.ts:178777

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:178770
