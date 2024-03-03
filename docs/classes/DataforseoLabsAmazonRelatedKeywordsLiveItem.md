[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRelatedKeywordsLiveItem

# Class: DataforseoLabsAmazonRelatedKeywordsLiveItem

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#constructor)

### Properties

- [depth](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)
- [keyword\_data](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)
- [related\_keywords](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)
- [se\_type](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#init)
- [toJSON](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#tojson)
- [fromJS](DataforseoLabsAmazonRelatedKeywordsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRelatedKeywordsLiveItem**(`data?`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRelatedKeywordsLiveItem`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md) |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:99439

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[depth](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#depth)

#### Defined in

main.ts:99432

___

### keyword\_data

• `Optional` **keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#keyword_data)

#### Defined in

main.ts:99430

___

### related\_keywords

• `Optional` **related\_keywords**: `string`[]

list of related keywords
represents the list of search queries which are related to the keyword returned in the array above

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[related_keywords](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#related_keywords)

#### Defined in

main.ts:99435

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveItem](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md).[se_type](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveItem.md#se_type)

#### Defined in

main.ts:99428

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

main.ts:99448

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

main.ts:99472

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)

#### Defined in

main.ts:99465
