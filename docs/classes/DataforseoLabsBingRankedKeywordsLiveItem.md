[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveItem

# Class: DataforseoLabsBingRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveItem.md#constructor)

### Properties

- [keyword\_data](DataforseoLabsBingRankedKeywordsLiveItem.md#keyword_data)
- [ranked\_serp\_element](DataforseoLabsBingRankedKeywordsLiveItem.md#ranked_serp_element)
- [se\_type](DataforseoLabsBingRankedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveItem**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Defined in

main.ts:107697

## Properties

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveItem](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:107691

___

### ranked\_serp\_element

• `Optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveItem](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[ranked_serp_element](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:107693

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveItem](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsBingRankedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:107689

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

main.ts:107706

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

main.ts:107725

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveItem`](DataforseoLabsBingRankedKeywordsLiveItem.md)

#### Defined in

main.ts:107718
