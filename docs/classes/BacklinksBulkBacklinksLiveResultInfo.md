[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkBacklinksLiveResultInfo

# Class: BacklinksBulkBacklinksLiveResultInfo

## Implements

- [`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkBacklinksLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkBacklinksLiveResultInfo.md#items)
- [items\_count](BacklinksBulkBacklinksLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkBacklinksLiveResultInfo.md#init)
- [toJSON](BacklinksBulkBacklinksLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkBacklinksLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkBacklinksLiveResultInfo**(`data?`): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md) |

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Defined in

main.ts:145234

## Properties

### items

• `Optional` **items**: [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)[]

contains relevant backlink data

#### Implementation of

[IBacklinksBulkBacklinksLiveResultInfo](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[items](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items)

#### Defined in

main.ts:145230

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkBacklinksLiveResultInfo](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items_count)

#### Defined in

main.ts:145228

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

main.ts:145243

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

main.ts:145265

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

#### Defined in

main.ts:145258
