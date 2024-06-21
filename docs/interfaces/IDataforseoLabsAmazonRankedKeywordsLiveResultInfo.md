**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

# Interface: IDataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN in a POST array

#### Source

main.ts:104827

***

### items?

> **`optional`** **items**: [`DataforseoLabsAmazonRankedKeywordsLiveItem`](../classes/DataforseoLabsAmazonRankedKeywordsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Source

main.ts:104839

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:104837

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:104833

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:104830

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:104825

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:104835
