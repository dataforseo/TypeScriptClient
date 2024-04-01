[Documentation](../README.md) / [Exports](../modules.md) / OnPageForceStopRequestInfo

# Class: OnPageForceStopRequestInfo

## Implements

- [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageForceStopRequestInfo.md#constructor)

### Properties

- [id](OnPageForceStopRequestInfo.md#id)

### Methods

- [init](OnPageForceStopRequestInfo.md#init)
- [toJSON](OnPageForceStopRequestInfo.md#tojson)
- [fromJS](OnPageForceStopRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageForceStopRequestInfo**(`data?`): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md) |

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Defined in

main.ts:147563

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array

#### Implementation of

[IOnPageForceStopRequestInfo](../interfaces/IOnPageForceStopRequestInfo.md).[id](../interfaces/IOnPageForceStopRequestInfo.md#id)

#### Defined in

main.ts:147559

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

main.ts:147572

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

main.ts:147589

___

### fromJS

▸ **fromJS**(`data`): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Defined in

main.ts:147582
