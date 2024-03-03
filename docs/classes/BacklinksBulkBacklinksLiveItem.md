[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkBacklinksLiveItem

# Class: BacklinksBulkBacklinksLiveItem

## Implements

- [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkBacklinksLiveItem.md#constructor)

### Properties

- [backlinks](BacklinksBulkBacklinksLiveItem.md#backlinks)
- [target](BacklinksBulkBacklinksLiveItem.md#target)

### Methods

- [init](BacklinksBulkBacklinksLiveItem.md#init)
- [toJSON](BacklinksBulkBacklinksLiveItem.md#tojson)
- [fromJS](BacklinksBulkBacklinksLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkBacklinksLiveItem**(`data?`): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md) |

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Defined in

main.ts:139895

## Properties

### backlinks

• `Optional` **backlinks**: `number`

number of backlinks pointing to the target

#### Implementation of

[IBacklinksBulkBacklinksLiveItem](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[backlinks](../interfaces/IBacklinksBulkBacklinksLiveItem.md#backlinks)

#### Defined in

main.ts:139891

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkBacklinksLiveItem](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[target](../interfaces/IBacklinksBulkBacklinksLiveItem.md#target)

#### Defined in

main.ts:139889

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

main.ts:139904

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

main.ts:139922

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)

#### Defined in

main.ts:139915
