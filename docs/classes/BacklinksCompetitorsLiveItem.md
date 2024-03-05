[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksCompetitorsLiveItem

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

[main.ts:136134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136134)

## Properties

### intersections

• `Optional` **intersections**: `number`

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[intersections](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

#### Defined in

[main.ts:136130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136130)

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

[main.ts:136128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136128)

___

### target

• `Optional` **target**: `string`

competitor domain

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[target](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

#### Defined in

[main.ts:136123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136123)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksCompetitorsLiveItem](../interfaces/IBacklinksCompetitorsLiveItem.md).[type](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

#### Defined in

[main.ts:136121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136121)

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

[main.ts:136143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136143)

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

[main.ts:136163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136163)

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

[main.ts:136156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136156)
