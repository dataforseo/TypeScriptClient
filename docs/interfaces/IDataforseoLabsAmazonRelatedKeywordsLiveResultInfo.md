**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

contains objects with keywords and related data

#### Source

main.ts:103025

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:103023

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:103019

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:103017

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:103010

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Source

main.ts:103012

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: [`AmazonKeywordData`](../classes/AmazonKeywordData.md)

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Source

main.ts:103015

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:103021
