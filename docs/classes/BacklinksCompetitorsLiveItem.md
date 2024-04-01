[Documentation](../README.md) / [Exports](../modules.md) / BacklinksCompetitorsLiveItem

# Class: BacklinksCompetitorsLiveItem

## Implements

- [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksCompetitorsLiveItem.md#constructor)

### Properties

- [intersections](BacklinksCompetitorsLiveItem.md#intersections)
- [rank](BacklinksCompetitorsLiveItem.md#rank)
- [target](BacklinksCompetitorsLiveItem.md#target)
- [type](BacklinksCompetitorsLiveItem.md#type)

### Methods

- [init](BacklinksCompetitorsLiveItem.md#init)
- [toJSON](BacklinksCompetitorsLiveItem.md#tojson)
- [fromJS](BacklinksCompetitorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksCompetitorsLiveItem**(`data?`): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md) |

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Defined in

main.ts:141549

## Properties

### intersections

• `Optional` **intersections**: `number`

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[intersections](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:141545

___

### rank

• `Optional` **rank**: `number`

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[rank](../interfaces/IBacklinksCompetitorsLiveItem.md#rank)

#### Defined in

main.ts:141543

___

### target

• `Optional` **target**: `string`

competitor domain

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[target](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

#### Defined in

main.ts:141538

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[type](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

#### Defined in

main.ts:141536

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

main.ts:141558

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

main.ts:141578

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Defined in

main.ts:141571
