[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#se_type)
- [seed\_keyword](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword)
- [seed\_keyword\_data](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword_data)
- [total\_count](IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

contains objects with keywords and related data

#### Defined in

main.ts:99601

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:99599

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:99595

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:99593

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:99586

___

### seed\_keyword

• `Optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:99588

___

### seed\_keyword\_data

• `Optional` **seed\_keyword\_data**: [`AmazonKeywordData`](../classes/AmazonKeywordData.md)

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Defined in

main.ts:99591

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:99597
