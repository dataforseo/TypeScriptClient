[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

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

[main.ts:101961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101961)

___


### items

• `Optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](../classes/DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

[main.ts:101973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101973)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:101971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101971)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:101967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101967)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:101964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101964)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:101959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101959)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:101969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101969)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")