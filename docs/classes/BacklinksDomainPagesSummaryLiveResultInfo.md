[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesSummaryLiveResultInfo

# Class: BacklinksDomainPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesSummaryLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksDomainPagesSummaryLiveResultInfo.md#items)
- [items\_count](BacklinksDomainPagesSummaryLiveResultInfo.md#items_count)
- [target](BacklinksDomainPagesSummaryLiveResultInfo.md#target)
- [total\_count](BacklinksDomainPagesSummaryLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksDomainPagesSummaryLiveResultInfo.md#init)
- [toJSON](BacklinksDomainPagesSummaryLiveResultInfo.md#tojson)
- [fromJS](BacklinksDomainPagesSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesSummaryLiveResultInfo**(`data?`): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md) |

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:139604

## Properties

### items

• `Optional` **items**: [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResultInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[items](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:139600

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResultInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[items_count](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:139598

___

### target

• `Optional` **target**: `string`

target in the post array

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResultInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[target](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:139594

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksDomainPagesSummaryLiveResultInfo](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[total_count](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#total_count)

#### Defined in

main.ts:139596

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

main.ts:139613

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

main.ts:139637

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:139630
