[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRankedKeywordsLiveItem

# Class: DataforseoLabsAmazonRankedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRankedKeywordsLiveItem.md#constructor)

### Properties

- [keyword\_data](DataforseoLabsAmazonRankedKeywordsLiveItem.md#keyword_data)
- [ranked\_serp\_element](DataforseoLabsAmazonRankedKeywordsLiveItem.md#ranked_serp_element)
- [se\_type](DataforseoLabsAmazonRankedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsAmazonRankedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsAmazonRankedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsAmazonRankedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRankedKeywordsLiveItem**(`data?`): [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRankedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Defined in

main.ts:102537

## Properties

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:102531

___

### ranked\_serp\_element

• `Optional` **ranked\_serp\_element**: [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

contains data on the products’s SERP element found for the returned keyword

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[ranked_serp_element](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:102533

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:102529

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

main.ts:102546

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

main.ts:102565

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveItem`](DataforseoLabsAmazonRankedKeywordsLiveItem.md)

#### Defined in

main.ts:102558
