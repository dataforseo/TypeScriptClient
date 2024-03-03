[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostBacklinksLiveResultInfo

# Class: BacklinksBulkNewLostBacklinksLiveResultInfo

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostBacklinksLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkNewLostBacklinksLiveResultInfo.md#items)
- [items\_count](BacklinksBulkNewLostBacklinksLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkNewLostBacklinksLiveResultInfo.md#init)
- [toJSON](BacklinksBulkNewLostBacklinksLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostBacklinksLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostBacklinksLiveResultInfo**(`data?`): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md) |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Defined in

main.ts:141027

## Properties

### items

• `Optional` **items**: [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResultInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[items](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items)

#### Defined in

main.ts:141023

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveResultInfo](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items_count)

#### Defined in

main.ts:141021

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

main.ts:141036

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

main.ts:141058

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Defined in

main.ts:141051
