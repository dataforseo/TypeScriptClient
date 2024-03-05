[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Implemented by

- [`DataforseoLabsAmazonRankedKeywordsLiveResultInfo`](../classes/DataforseoLabsAmazonRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#asin)
- [items](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAmazonRankedKeywordsLiveResultInfo.md#total_count)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN in a POST array

#### Defined in

[main.ts:100293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100293)

___

### items

• `Optional` **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Defined in

[main.ts:100305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100305)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:100303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100303)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:100299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100299)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:100296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100296)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:100291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100291)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:100301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100301)
