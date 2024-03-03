[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBBulkKeywordDifficultyLiveItem

# Class: DataforseoLabsBBulkKeywordDifficultyLiveItem

## Implements

- [`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#constructor)

### Properties

- [keyword](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword)
- [keyword\_difficulty](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword_difficulty)
- [se\_type](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#init)
- [toJSON](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#tojson)
- [fromJS](DataforseoLabsBBulkKeywordDifficultyLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBBulkKeywordDifficultyLiveItem**(`data?`): [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md) |

#### Returns

[`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Defined in

main.ts:82517

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IDataforseoLabsBBulkKeywordDifficultyLiveItem](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[keyword](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword)

#### Defined in

main.ts:82508

___

### keyword\_difficulty

• `Optional` **keyword\_difficulty**: `number`

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[IDataforseoLabsBBulkKeywordDifficultyLiveItem](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[keyword_difficulty](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#keyword_difficulty)

#### Defined in

main.ts:82513

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBBulkKeywordDifficultyLiveItem](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md).[se_type](../interfaces/IDataforseoLabsBBulkKeywordDifficultyLiveItem.md#se_type)

#### Defined in

main.ts:82506

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

main.ts:82526

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

main.ts:82545

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBBulkKeywordDifficultyLiveItem`](DataforseoLabsBBulkKeywordDifficultyLiveItem.md)

#### Defined in

main.ts:82538
