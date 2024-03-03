[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostBacklinksLiveItem

# Class: BacklinksBulkNewLostBacklinksLiveItem

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostBacklinksLiveItem.md#constructor)

### Properties

- [lost\_backlinks](BacklinksBulkNewLostBacklinksLiveItem.md#lost_backlinks)
- [new\_backlinks](BacklinksBulkNewLostBacklinksLiveItem.md#new_backlinks)
- [target](BacklinksBulkNewLostBacklinksLiveItem.md#target)

### Methods

- [init](BacklinksBulkNewLostBacklinksLiveItem.md#init)
- [toJSON](BacklinksBulkNewLostBacklinksLiveItem.md#tojson)
- [fromJS](BacklinksBulkNewLostBacklinksLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostBacklinksLiveItem**(`data?`): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md) |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Defined in

main.ts:140965

## Properties

### lost\_backlinks

• `Optional` **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveItem](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[lost_backlinks](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#lost_backlinks)

#### Defined in

main.ts:140961

___

### new\_backlinks

• `Optional` **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveItem](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[new_backlinks](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#new_backlinks)

#### Defined in

main.ts:140958

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkNewLostBacklinksLiveItem](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[target](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#target)

#### Defined in

main.ts:140955

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

main.ts:140974

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

main.ts:140993

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)

#### Defined in

main.ts:140986
