[Documentation](../README.md) / [Exports](../modules.md) / BacklinksCompetitorsLiveResultInfo

# Class: BacklinksCompetitorsLiveResultInfo

## Implements

- [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksCompetitorsLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksCompetitorsLiveResultInfo.md#items)
- [items\_count](BacklinksCompetitorsLiveResultInfo.md#items_count)
- [total\_count](BacklinksCompetitorsLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksCompetitorsLiveResultInfo.md#init)
- [toJSON](BacklinksCompetitorsLiveResultInfo.md#tojson)
- [fromJS](BacklinksCompetitorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksCompetitorsLiveResultInfo**(`data?`): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksCompetitorsLiveResultInfo`](../interfaces/IBacklinksCompetitorsLiveResultInfo.md) |

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:136347

## Properties

### items

• `Optional` **items**: [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)[]

items array

#### Implementation of

[IBacklinksCompetitorsLiveResultInfo](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[items](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:136343

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[IBacklinksCompetitorsLiveResultInfo](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[items_count](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:136341

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksCompetitorsLiveResultInfo](../interfaces/IBacklinksCompetitorsLiveResultInfo.md).[total_count](../interfaces/IBacklinksCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:136339

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

main.ts:136356

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

main.ts:136379

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksCompetitorsLiveResultInfo`](BacklinksCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:136372
