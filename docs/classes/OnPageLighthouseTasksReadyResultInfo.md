[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseTasksReadyResultInfo

# Class: OnPageLighthouseTasksReadyResultInfo

## Implements

- [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseTasksReadyResultInfo.md#constructor)

### Properties

- [endpoint\_json](OnPageLighthouseTasksReadyResultInfo.md#endpoint_json)
- [id](OnPageLighthouseTasksReadyResultInfo.md#id)
- [tag](OnPageLighthouseTasksReadyResultInfo.md#tag)

### Methods

- [init](OnPageLighthouseTasksReadyResultInfo.md#init)
- [toJSON](OnPageLighthouseTasksReadyResultInfo.md#tojson)
- [fromJS](OnPageLighthouseTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseTasksReadyResultInfo**(`data?`): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md) |

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Defined in

main.ts:154570

## Properties

### endpoint\_json

• `Optional` **endpoint\_json**: `string`

URL for collecting the results of the OnPage Lighthouse JSON task

#### Implementation of

[IOnPageLighthouseTasksReadyResultInfo](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[endpoint_json](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#endpoint_json)

#### Defined in

main.ts:154566

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IOnPageLighthouseTasksReadyResultInfo](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[id](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#id)

#### Defined in

main.ts:154562

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IOnPageLighthouseTasksReadyResultInfo](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[tag](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:154564

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

main.ts:154579

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

main.ts:154598

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Defined in

main.ts:154591
