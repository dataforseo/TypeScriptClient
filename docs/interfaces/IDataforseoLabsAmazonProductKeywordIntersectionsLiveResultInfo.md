[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Interface: IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

## Implemented by

- [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asins](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#asins)
- [items](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#total_count)

## Properties

### asins

• `Optional` **asins**: `Object`

ASINs in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:104338

___

### items

• `Optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

main.ts:104350

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:104348

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:104344

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:104341

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:104336

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:104346
